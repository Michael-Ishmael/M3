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
	//<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	wp_enqueue_style( 'open_sans', "https://fonts.googleapis.com/css?family=Open+Sans", array());
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

function m3_nav($str_location){

	$wrap_class_string = 'nav';
	if($str_location == 'header') $wrap_class_string .= ' justify-content-end';
	if($str_location == 'footer') $wrap_class_string .= ' justify-content-center';
	if($str_location == 'sticky') $wrap_class_string .= ' justify-content-center';

	wp_nav_menu(
		array(
			'theme_location'  => 'header-menu',
			'menu'            => '',
			'container'       => 'div',
			'container_class' => 'menu-container pull-right',
			'container_id'    => '',
			'menu_class'      => 'nav',
			'menu_id'         => "m3-menu",
			'echo'            => true,
			'fallback_cb'     => 'wp_page_menu',
			'before'          => '',
			'after'           => '',
			'link_before'     => '',
			'link_after'      => '',
			'items_wrap'      => '<ul class="' . $wrap_class_string .'">%3$s</ul>',
			'depth'           => 0,
			'walker'          => new M3_Walker_Nav_Menu()
		)
	);

}

class M3_Walker_Nav_Menu extends Walker_Nav_Menu {

	var $db_fields = array(
		'parent' => 'menu_item_parent',
		'id'     => 'db_id'
	);

	function start_lvl(&$output, $depth = 0, $args = []) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"dropdown-menu dropdown-menu-right\">\n";
	}

	function end_lvl( &$output, $depth = 0, $args = array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "$indent</ul>\n";
	}
}

function str_add_menu_classes($menu_list, $args){

	$home_key = null;
	$privacy_key = null;
	foreach ( $menu_list as $key=>$menu_item ) {
		array_push($menu_item->classes, 'nav-item');
		if($args->theme_location=='header-menu' && $menu_item->post_name=='home'){
			$home_key = $key;
		}
		if($menu_item->title=="Privacy Notice"){
			$privacy_key = $key;
		}
	}
	if($args->menu_id == 'header' && $home_key !== null) unset($menu_list[$home_key]);
	if($args->menu_id != 'footer' && $privacy_key !== null) unset($menu_list[$privacy_key]);

	return $menu_list;
}

function str_add_menu_link_atts($atts, $item) {
	$att_class_names = "nav-link";
	if($item->title == get_post()->post_title) $att_class_names .= ' active';
	if(in_array("menu-item-has-children", $item->classes)){
		$att_class_names .= ' dropdown-toggle';
		$atts['data-toggle'] = "dropdown";
		$atts['role'] = "button";
		$atts['aria-haspopup'] = "true";
		$atts['aria-expanded'] = "false";
	}
	if($item->menu_item_parent != "0"){
		$att_class_names .= ' dropdown-item';
	}
	$atts['class'] = $att_class_names;
	return $atts;
}

function register_m3_menu(){

	register_nav_menus(array( // Using array to specify more menus if needed
		'header-menu' => __('Main M3 Menu', 'amec-m3'), // Main Navigation
		//'sidebar-menu' => __('Sidebar Menu', 'amec-m3'), // Sidebar Navigation
		//'extra-menu' => __('Extra Menu', 'amec-m3') // Extra Navigation if needed (duplicate as many as you need!)
	));

}


add_action('init', 'register_m3_menu'); // Add HTML5 Blank Menu
add_filter('wp_nav_menu_objects', 'str_add_menu_classes', 10, 2);
add_filter('nav_menu_link_attributes', 'str_add_menu_link_atts', 10, 2);