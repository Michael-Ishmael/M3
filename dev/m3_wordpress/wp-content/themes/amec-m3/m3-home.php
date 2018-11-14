<?php
/*
Template Name: M3 Home
Template Post Type: page
*/
?>

<?php
/*
Template Name: M3 Page
Template Post Type: page
*/

get_header(); ?>

<main role="main" class="standard-page">

    <section class="container p-4">

		<?php if ( have_posts() ): while ( have_posts() ) :
		the_post(); ?>


        <div class="row welcome-hero">
            <div class="hero-content col-12">
                <h1>Welcome</h1>
                <p class="lead">Welcome to M3 a measurement and evaluation planning tool developed by AMEC to help PR
                    professionals better plan and resource their measurement and evaluation programmes.</p>
                <p class="pull-out">Start your measurement journey here.</p>
            </div>
        </div>
<br>
        <div class="row">
            <div class="pl-0 col-12 col-sm-8">
                <div class="team-message mt-4">

                    <p>
                        AMEC has always been committed to not only championing measurement and evaluation best practice
                        in PR and communications but also providing the industry with best-in-class tools, resources and
                        education. We believe the industry took a massive step forward in 2016 with the launch of AMEC’s
                        Integrated Evaluation Framework (IEF) as seen by the high uptake of the IEF around the globe.
                        And it’s in this spirit of continuous improvement that AMEC set out to drive the industry
                        forward yet again.
                    </p>
                    <div class="inset-image">
                        <a href="/wp-content/uploads/2018/11/M3-byBrick-insight-Illustration.jpg" target="_blank">
                            <img src="/wp-content/uploads/2018/11/M3-byBrick-insight-Illustration-768x768.jpg"
                                 alt="M3 Brick illustration"/>
                        </a>

                    </div>
                    <p>
                        The Measurement Maturity Mapper, or M3, is a survey-based diagnostic tool designed to help
                        professionals at any level of sophistication, and from any type of organisation, better plan
                        their measurement and evaluation journey by clearly benchmarking where they are starting from in
                        the process.
                    </p>
                    <p>
                        The M3 takes users through a series of questions – all of which are rooted in the Barcelona
                        Principles 2.0 and the IEF – focused on how their organisation, or their client’s organisation,
                        currently approaches communication measurement and evaluation reporting, planning, and
                        demonstrating impact. The result is a relative benchmark – by market, sector, organisation type
                        or size – on where users are in their measurement and evaluation journey, both overall and for
                        each of component.
                    </p>
                    <p>
                        But that’s not all. In addition to benchmarking organisations, the M3 also provides practical
                        advice for how those organisations can propel themselves along the measurement and evaluation
                        journey, which is ultimately why AMEC set out to develop and launch the M3. With this output,
                        combined with the benchmark data, organisations will be able to map their next step in the
                        measurement and evaluation journey and ensure they are continuously improving, and striving, for
                        better.
                    </p>
                    <p>
                        Good luck to you on your measurement and evaluation journey.
                    </p>
                    <p class="sign-off">
                        AMEC’s M3 Team
                        <br>
                        <span class="team">Colin Wheeler, Paul Hender, Ben Levine, Aseem Sood</span>
                    </p>

                </div>
            </div>
            <div class="pr-0 col-12 col-sm-4 mt-4">

                <section class="twitter-feed-container">
                    <h4 class="text-center">
                        Join the conversation
                    </h4>
                    <div class="twitter-feed">
                        <p>Tweet 1</p>
                        <p class="alt">Tweet 2</p>
                        <p>Tweet 3</p>
                        <p class="alt">Tweet 4</p>
                        <p>Tweet 5</p>
                        <p class="alt">Tweet 6</p>
                        <p>Tweet 7</p>
                        <p class="alt">Tweet 8</p>
                        <p>Tweet 9</p>
                        <p class="alt">Tweet 10</p>
                        <p>Tweet 11</p>
                        <p class="alt">Tweet 12</p>

                    </div>

                </section>
                <div class="contact my-3">
                    <div>
                    <h5>Have a question?</h5>

                        <p><a href="mailto:m3support@understandingexpertise.uk">Contact the M3 team <i class="fas fa-envelope"></i></a></p>
                    </div>
                </div>
                <div class="video-link">

                    <a href="/presentation/">
                        <img
                                src="/wp-content/uploads/2018/11/presentation_video_link.jpg"
                                alt="Link to M3 presentation"/>
                    </a>

                    Video Presentation from AMEC Summit


                </div>

                <div class="action-link">

                    <a href="/m3/questionnaire">
                        Go to the Questionnaire <i class="fas fa-arrow-circle-right"></i>
                    </a>


                </div>

            </div>

            <div class="social-sharing">

            </div>


			<?php endwhile; ?>

			<?php endif; ?>

    </section>

</main>

<?php get_footer(); ?>

