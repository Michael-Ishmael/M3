<?php
function ajax_auth_init()
{
    wp_register_style('ajax-auth-style', get_stylesheet_directory_uri() . '/css/ajax-auth-style.css');
    wp_enqueue_style('ajax-auth-style');

    wp_register_script('validate-script', get_stylesheet_directory_uri() . '/js/jquery.validate.js', array('jquery'));
    wp_enqueue_script('validate-script');

    wp_register_script('ajax-auth-script', get_stylesheet_directory_uri() . '/js/ajax-auth-script.js', array('jquery'));
    wp_enqueue_script('ajax-auth-script');

    wp_localize_script('ajax-auth-script', 'ajax_auth_object', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'redirecturl' => get_permalink(),
        'loadingmessage' => __('Sending user info, please wait...'),
        'logout_nonce' => wp_create_nonce('ajax-logout-nonce'),
        'login_nonce' => wp_create_nonce('ajax-login-nonce'),
        'password_reset_nonce' => wp_create_nonce('password-reset-nonce'),
        'register_nonce' => wp_create_nonce('ajax-register-nonce'),
        'logged_in_nonce' => wp_create_nonce('ajax-logged-in-nonce'),
        'rest_nonce' => wp_create_nonce('wp_rest'),
        'resturl' => esc_url_raw( rest_url() ),
        'lost_password_url' => wp_lostpassword_url(),
        'reset_password_url' => site_url( "wp-login.php?action=resetpass")

    ));

    // Enable the user with no privileges to run ajax_login() in AJAX
    add_action('wp_ajax_nopriv_ajaxlogin', 'ajax_login');
    // Enable the user with no privileges to run ajax_register() in AJAX
    add_action('wp_ajax_nopriv_ajaxregister', 'ajax_register');

    add_action('wp_ajax_ajaxlogout', 'ajax_logout');

    add_action('wp_ajax_nopriv_ajaxloggedin', 'ajax_is_logged_in');
    add_action('wp_ajax_ajaxloggedin', 'ajax_is_logged_in');

    add_action( 'login_form_lostpassword',  'do_password_lost' );
    add_filter( 'retrieve_password_message', 'replace_retrieve_password_message', 10 , 4 );

    add_action( 'login_form_rp',  'redirect_to_custom_password_reset' ); //GET
    add_action( 'login_form_resetpass', 'redirect_to_custom_password_reset' ); //GET

    add_action( 'login_form_rp',  'do_password_reset'  ); //POST
    add_action( 'login_form_resetpass', 'do_password_reset'  ); //POST

}

add_action('init', 'ajax_auth_init');



function ajax_is_logged_in()
{
    check_ajax_referer('ajax-logged-in-nonce', 'security');
    auth_user_logged_in();

    die();
}

function ajax_login()
{

    // First check the nonce, if it fails the function will break
    check_ajax_referer('ajax-login-nonce', 'security');

    // Nonce is checked, get the POST data and sign user on
    // Call auth_user_login
    auth_user_login($_POST['username'], $_POST['password'], 'Login');

    die();
}

function ajax_logout()
{

    // First check the nonce, if it fails the function will break
    check_ajax_referer('ajax-logout-nonce', 'security');
    wp_clear_auth_cookie();
    wp_logout();
    ob_clean();
    echo json_encode(array('loggedOut' => true));
    wp_die();

}

function ajax_register()
{

    // First check the nonce, if it fails the function will break
    check_ajax_referer('ajax-register-nonce', 'security');

    // Nonce is checked, get the POST data and sign user on
    $info = array();

    $email = sanitize_email($_POST['email']);
    $firstName = sanitize_text_field($_POST['firstName']);

    $info['user_login'] = sanitize_user($_POST['username']);
    $info['user_pass'] = sanitize_text_field($_POST['password']);
    $info['user_email'] = $email;
    $info['user_nicename'] = $info['nickname'] = $info['display_name'] = $info['first_name'] = $firstName;
    $info['last_name'] = sanitize_text_field($_POST['lastName']);
    $info['locale'] = sanitize_text_field($_POST['locale']);
    $info['role'] = 'author';
    $info['show_admin_bar_front'] = 'false';

    // Register the user
    $user_register = wp_insert_user($info);
    if (is_wp_error($user_register)) {
        $error = $user_register->get_error_codes();

        if (in_array('empty_user_login', $error))
            echo json_encode(array('loggedIn' => false, 'message' => __($user_register->get_error_message('empty_user_login'))));
        elseif (in_array('existing_user_login', $error))
            echo json_encode(array('loggedIn' => false, 'message' => __('This email address is already registered.')));
        elseif (in_array('existing_user_email', $error))
            echo json_encode(array('loggedIn' => false, 'message' => __('This email address is already registered.')));
    } else {

        $user_signon = wp_signon(array('user_login' => $info['user_login'], 'user_password' => $info['user_pass']), false);
        if (is_wp_error($user_signon)) {
            echo json_encode(array('loggedIn' => false, 'message' => __('Wrong username or password.')));
            die;
        }

        wp_set_current_user($user_signon->ID);

        add_user_meta($user_signon->ID, "organisation", sanitize_text_field($_POST['organisation']), true);
        add_user_meta($user_signon->ID, "jobTitle", sanitize_text_field($_POST['jobTitle']), true);
        add_user_meta($user_signon->ID, "contactNumber", sanitize_text_field($_POST['contactNumber']), true);

        $draft_framework_id = -1;
        if(!empty($_POST['tempFramework'])){
            $post_id = wp_insert_post(array(
                'post_id' => 0,
                'post_content' => $_POST['tempFramework'],
                'post_title' => "Aif##Temp_" . $user_signon->ID,
                'post_excerpt' => "Pre-save framework",
                'post_status' => "draft",
                'post_type' => "aif_workflow"
            ), true);
            if (!is_wp_error($post_id)){
                $draft_framework_id = $post_id;
            }
        }

        echo json_encode(array('loggedIn' => true,
            'message' => __('user logged in'),
            'userId' => $user_signon->ID,
            'email' => $email,
            'displayName' => $firstName,
            'draftFrameworkId' => $draft_framework_id
        ));

    }

    die();
}

function auth_user_login($user_login, $password, $login)
{
    $info = array();
    $info['user_login'] = $user_login;
    $info['user_password'] = $password;
    $info['remember'] = true;

    $user_signon = wp_signon($info, false);
    if (is_wp_error($user_signon)) {
        echo json_encode(array('loggedIn' => false, 'message' => __('Wrong username or password.')));
    } else {
        wp_set_current_user($user_signon->ID);
        $draft_framework_id = -1;
        if(!empty($_POST['tempFramework'])){
            $post_id = wp_insert_post(array(
                'post_id' => 0,
                'post_content' => $_POST['tempFramework'],
                'post_title' => "Aif##Temp_" . $user_signon->ID,
                'post_excerpt' => "Pre-save framework",
                'post_status' => "draft",
                'post_type' => "aif_workflow"
            ), true);
            if (!is_wp_error($post_id)){
                $draft_framework_id = $post_id;
            }
        }

        echo json_encode(array('loggedIn' => true,
            'message' => __($login . ' successful'),
            'userId' => $user_signon->ID,
            'displayName' => $user_signon->display_name,
            'draftFrameworkId' => $draft_framework_id,
            'redirectUrl' => home_url( 'home/framework/interactive-framework-3/' )
        ));
    }

    die();
}

function auth_user_logged_in()
{
    $user = wp_get_current_user();

    if (is_wp_error($user)) {
        echo json_encode(array('loggedIn' => false, 'message' => __('error checking user')));
    } else {
        if ($user->ID == 0) {
            echo json_encode(array('loggedIn' => false, 'message' => __('no current user')));
            die();
        }

        echo json_encode(array('loggedIn' => true,
            'message' => __('user logged in'),
            'userId' => $user->ID,
            'email' => $user->user_email,
            'displayName' => $user->display_name
        ));
    }

    die();
}

function do_password_lost() {
    if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {

        //ajax-password_reset-nonce
        if(!wp_verify_nonce($_POST['security'], 'password-reset-nonce')){
            die("Security failed!");
        }
        $retrieve_result = retrieve_password();
        if ( is_wp_error( $retrieve_result ) ) {

            $errors = $retrieve_result->get_error_codes();

            if (in_array('empty_username', $errors))
                echo json_encode(array('success' => false, 'message' => __( "You must supply an email or username" )));
            if (in_array('invalid_email', $errors))
                echo json_encode(array('success' => false, 'message' => __( "We don't recognise that email address.  Please try again" )));
            else
                echo json_encode(array('success' => false, 'message' => __( join( ',', $errors ))));
            //$redirect_url = home_url( 'member-password-lost' );
            //$redirect_url = add_query_arg( 'errors', join( ',', $errors->get_error_codes() ), $redirect_url );
        } else {
            // Email sent
            echo json_encode(array('success' => true, 'message' => "Email Sent"));
            //$redirect_url = home_url( 'member-login' );
            //$redirect_url = add_query_arg( 'checkemail', 'confirm', $redirect_url );
        }

        //wp_redirect( $redirect_url );
        die();
    }
}

function replace_retrieve_password_message( $message, $key, $user_login, $user_data ) {
    // Create new message
    $msg  = __( 'Hello!' ) . "\r\n\r\n";
    $msg .= sprintf( __( 'You asked us to reset your password for your AMEC Framework account using the email address %s.' ), $user_login ) . "\r\n\r\n";
    $msg .= __( "If this was a mistake, or you didn't ask for a password reset, just ignore this email and nothing will happen." ) . "\r\n\r\n";
    $msg .= __( 'To reset your password, visit the following address:' ) . "\r\n\r\n";
    $msg .= site_url( "wp-login.php?action=rp&key=$key&login=" . rawurlencode( $user_login )) . "\r\n\r\n";
    $msg .= __( 'Thanks!' ) . "\r\n";

    return $msg;
}

function redirect_to_custom_password_reset() {
    if ( 'GET' == $_SERVER['REQUEST_METHOD'] ) {
        // Verify key / login combo
        $user = check_password_reset_key( $_REQUEST['key'], $_REQUEST['login'] );
        if ( ! $user || is_wp_error( $user ) ) {
            if ( $user && $user->get_error_code() === 'expired_key' ) {
                wp_redirect( home_url( 'home/framework/interactive-framework-3?rp=true&login=expiredkey' ) );
            } else {
                wp_redirect( home_url( 'home/framework/interactive-framework-3?rp=true&login=invalidkey' ) );
            }
            die();
        }

        $redirect_url = home_url( 'home/framework/interactive-framework-3/' );
        $redirect_url = add_query_arg( 'rp', esc_attr( "true" ), $redirect_url );
        $redirect_url = add_query_arg( 'login', esc_attr( $_REQUEST['login'] ), $redirect_url );
        $redirect_url = add_query_arg( 'key', esc_attr( $_REQUEST['key'] ), $redirect_url );

        wp_redirect( $redirect_url );
        die();
    }
}

function do_password_reset() {
    if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
        $rp_key = $_REQUEST['key'];
        $rp_login = $_REQUEST['user_login'];

        $user = check_password_reset_key( $rp_key, $rp_login );

        if ( ! $user || is_wp_error( $user ) ) {
            if ( $user && $user->get_error_code() === 'expired_key' ) {
                echo json_encode(array('success' => false, 'message' => __( "Your reset link has expired.  Please try again" ), 'tryAgain' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => __( "There has been an problem with this link. Please try again"), 'tryAgain' => true));
            }
            die();
        }

        if ( isset( $_POST['new_pass'] ) ) {

            if ( empty( $_POST['new_pass'] ) ) {
                // Password is empty

                echo json_encode(array('success' => false, 'message' => __( "No Password supplied" )));
                die();
            }

            // Parameter checks OK, reset password
            $new_pass = $_POST['new_pass'];

            reset_password( $user,  $new_pass);

            auth_user_login($user->user_email, $new_pass, 'login');

            die();
            //echo json_encode(array('success' => true, 'message' => __( "Your password has been reset" )));
        } else {
            echo "Invalid request.";
        }

        die();
    }
}

