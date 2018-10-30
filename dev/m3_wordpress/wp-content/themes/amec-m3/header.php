<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="container-fluid p-0">
    <div class="main-header">
        <div class="mx-5">
            <div class="row align-items-center justify-content-center">
                <div class="col-4">
                    <div><img class="logo" src="<?php echo THEME_IMG_PATH; ?>/amec-logo.png"></div>
                </div>
                <div class="col-8">
                    <ul class="nav justify-content-end">
                        <li class="nav-item"><a class="nav-link p-2" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link p-2 active" href="/questionnaire">Questionnaire</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="#">Supporting Material</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="#">Resources</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="#">Contact</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="#">AMEC Website</a></li>
						<?php if ( is_user_logged_in() ) {
							?>
                            <li class="nav-item">
                                <form action="/questionnaire" method="post">
                                    <input type="submit" class="logout-button" name="m3_logout" value="Log Out" />
                                </form>

                            </li>
							<?php
						}
						?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <h1 class="sub-header text-center p-4 m-0">Measurement Maturity Mapper</h1>
</header>

