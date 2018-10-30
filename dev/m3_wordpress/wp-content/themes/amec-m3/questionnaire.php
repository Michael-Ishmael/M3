<?php
/* Template Name: M3 Questionnaire Template */




get_header(); ?>
	<main>
<!--        <a href="--><?php //echo wp_logout_url(); ?><!--" title="Logout">Logout</a>-->
        <?php if ( is_user_logged_in()){

            ?>

        <div id="app">

        </div>

        <?php

        } else {



          //  echo "ABC: " . $new_registration;
            //user isn't logged in, create a login template and call from here
            //get_template_part ( 'content', 'login' ); //create your login form at content-login.php file
            //or you can use the wp built in function to load the default form
            //wp_login_form();
	        //wp_register();

            ?>

            <div id="app-register"></div>

            <?php

        } ?>



	</main>


<?php get_footer(); ?>