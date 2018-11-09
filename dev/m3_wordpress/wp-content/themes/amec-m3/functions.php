<?php

add_filter('allowed_http_origins', 'add_allowed_origins');

function add_allowed_origins($origins) {
	$origins[] = 'http://m3project.local:3000';
	$origins[] = 'http://localhost:3000';
	return $origins;
}

function m3_styles() {

	//wp_enqueue_style( 'semantic-ui', '//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css');

	wp_enqueue_script( 'm3_scripts', get_stylesheet_directory_uri() . '/dist/app.js', array(), '1.0', true );
	wp_enqueue_style( 'm3_styles', get_template_directory_uri() . '/dist/app.css', array(), date("H:i:s"));

	wp_register_script('m3_globals_script', get_stylesheet_directory_uri() . '/js/m3_globals.js', array('jquery'));
	wp_enqueue_script('m3_globals_script');
	m3_setup_js_globals();

}

function m3_setup_js_globals() {
	wp_localize_script('m3_globals_script', 'm3_globals_object', array(
		'ajaxurl' => admin_url('admin-ajax.php'),
		'redirecturl' => get_permalink(),
		'loadingmessage' => __('Sending user info, please wait...'),
		'logout_nonce' => wp_create_nonce('logout-nonce'),
		'login_nonce' => wp_create_nonce('login-nonce'),
		'password_reset_nonce' => wp_create_nonce('password-reset-nonce'),
		'register_nonce' => wp_create_nonce('register-nonce'),
		'logged_in_nonce' => wp_create_nonce('logged-in-nonce'),
		//'rest_nonce' => wp_create_nonce('wp_rest'),
		'resturl' => esc_url_raw( rest_url() ),
		'lost_password_url' => wp_lostpassword_url(),
		'reset_password_url' => site_url( "wp-login.php?action=resetpass"),
		'apiUrl' => site_url("wp-json/m3/v1/"),
		'apiNonce' => wp_create_nonce('wp_rest')

	));
}


if( !defined('THEME_IMG_PATH')){
	define( 'THEME_IMG_PATH', get_stylesheet_directory_uri() . '/images' );
}


add_action( 'wp_enqueue_scripts', 'm3_styles' );
add_action( 'login_enqueue_scripts', 'm3_setup_js_globals' );

function m3_rewrite_rules(){

	$overlay_pages = array("m3" );

	foreach ( $overlay_pages as $overlay_page ) {
		$page = get_page_by_path($overlay_page);
		add_rewrite_rule('^'.$overlay_page.'/(.*)?$','index.php?page_id='.$page->ID,'top');
		//add_rewrite_rule('^'. 'mstr' .'/(.*)?$','index.php?page_id='.$page->ID,'top');

	}



}

add_action('init','m3_rewrite_rules');


function before_init(){

	if($_POST && array_key_exists('m3_login', $_POST)){

		$user = wp_get_current_user();
		if($user->exists()){
			if($user->user_email == $_POST['log']){
				return;
			}
		}

		$user = wp_signon();
		if( isset($user->ID)){
			wp_set_current_user($user->ID);
			if ( wp_validate_auth_cookie( '', 'logged_in' ) != $user->ID )
			{
				wp_set_auth_cookie( $user->ID );
			}
		}

	} else if($_POST && array_key_exists('m3_logout', $_POST)){

		wp_logout();
		wp_set_current_user(0);
		//ob_clean();

	} else if($_POST && array_key_exists('m3_register', $_POST)) {
		m3_register_new_user();
	}
}

function m3_update_cookie( $logged_in_cookie ){
	$_COOKIE[LOGGED_IN_COOKIE] = $logged_in_cookie;
}
add_action( 'set_logged_in_cookie', 'm3_update_cookie' );

function m3_register_new_user(){


	// First check the nonce, if it fails the function will break
	$nonce = $_POST['security'];
	if( ! wp_verify_nonce($nonce, 'register-nonce')){

		die('Error. Failed security check'); //TODO: Handle security;
	};

	// Nonce is checked, get the POST data and sign user on
	$info = array();

	$email = sanitize_email($_POST['email']);
	$firstName = sanitize_text_field($_POST['firstName']);

	$info['user_login'] = $email; //sanitize_user($_POST['username']);
	$info['user_pass'] = sanitize_text_field($_POST['password']);
	$info['user_email'] = $email;
	$info['user_nicename'] = $info['nickname'] = $info['display_name'] = $info['first_name'] = $firstName;
	$info['last_name'] = sanitize_text_field($_POST['lastName']);
	$info['locale'] = isset($_POST['locale']) ? sanitize_text_field($_POST['locale']) : 'en';
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

		if(isset($_POST['organisation'])) add_user_meta($user_signon->ID, "organisation", sanitize_text_field($_POST['organisation']), true);
		if(isset($_POST['jobTitle'])) add_user_meta($user_signon->ID, "jobTitle", sanitize_text_field($_POST['jobTitle']), true);
		if(isset($_POST['contactNumber'])) add_user_meta($user_signon->ID, "contactNumber", sanitize_text_field($_POST['contactNumber']), true);
		if(isset($_POST['country'])) add_user_meta($user_signon->ID, "country", sanitize_text_field($_POST['country']), true);


/*		//TODO: Create new questionnaire

		echo json_encode(array('loggedIn' => true,
		                       'message' => __('user logged in'),
		                       'userId' => $user_signon->ID,
		                       'email' => $email,
		                       'displayName' => $firstName,
		                       'draftFrameworkId' => $draft_framework_id
		));*/

	}

}

add_action('after_setup_theme','before_init');


add_action('login_init', 'redirect_logged_in_user');
function redirect_logged_in_user()
{
	global $action;

	/* if the user call logout and is not logged in we do nothing*/
	if ('logout' === $action || !is_user_logged_in()) {
		return;
	}

	/* we redirect logged in people*/
	wp_redirect('/m3');
	exit;
}


/*add_action('check_admin_referer', 'logout_without_confirm', 10, 2);
function logout_without_confirm($action, $result)
{
	/**
	 * Allow logout without confirmation

	if ($action == "log-out") {  //&& !isset($_GET['_wpnonce'])
		$redirect_to = isset($_REQUEST['redirect_to']) ? $_REQUEST['redirect_to'] : '/questionnaire';
		$location = str_replace('&amp;', '&', wp_logout_url($redirect_to));
		header("Location: $location");
		die;
	}
}*/