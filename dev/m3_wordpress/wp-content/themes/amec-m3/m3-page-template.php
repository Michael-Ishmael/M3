<?php
/*
Template Name: M3 Page
Template Post Type: page
*/

get_header(); ?>

	<main role="main" class="standard-page">

		<section class="container p-4">

				<?php if (have_posts()): while (have_posts()) : the_post(); ?>


						<?php the_content(); ?>

				<?php endwhile; ?>

				<?php endif; ?>

		</section>

	</main>

<?php get_footer(); ?>