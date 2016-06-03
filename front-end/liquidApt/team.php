<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>LiquidApt: Our Team</title>
		<?php include "includes/head.php"; ?>
	</head>

	<body>
		<?php include "includes/header.php"; ?>
		<main class="main">
			<section class="container-main">
				<h1 class="heading-primary">Our Team</h1>
				
				<ul class="team-block grid-parent ul-base">
					<li class="team-each grid-child">
						<img src="assets/img/team/members/pablo-alfaro.jpg" alt="Pablo Alfaro" width="600" height="400">
						<div class="team-each-member">Pablo Alfaro</div>
						<div class="team-each-role">Co-Founder &amp; CTO</div>

					<li class="team-each grid-child">
						<img src="assets/img/team/members/alexis-ray.jpg" alt="Alexis Ray" width="600" height="400">
						<div class="team-each-member">Alexis Ray</div>
						<div class="team-each-role">Co-Founder &amp; Lead UI Developer</div>

					<li class="team-each grid-child">
						<img src="assets/img/team/members/calvin-roberts.jpg" alt="Calvin Roberts" width="600" height="400">
						<div class="team-each-member">Calvin Roberts</div>
						<div class="team-each-role">Programmer / Hacker</div>

					<li class="team-each grid-child">
						<img src="assets/img/team/members/richard-schlick.jpg" alt="Richard Schlick" width="600" height="400">
						<div class="team-each-member">Richard Schlick</div>
						<div class="team-each-role">Business Development</div>

					<li class="team-each grid-child">
						<img src="assets/img/team/members/emma-downing.jpg" alt="Emma Downing" width="600" height="400">
						<div class="team-each-member">Emma Downing</div>
						<div class="team-each-role">Marketing &amp; Sales</div>
				</ul> <!-- /team-block -->
			</section> <!-- /container-main -->

			<section class="join-block">
				<div class="background-block background-block--job">
					<div class="background-block-content container-sm">
						<h2 class="heading-secondary">Join us</h2>
						<p>We're the fastest growing portfolio site building app in the country. Our workspace is located within a beautiful, heritage property overlooking Redwood Park. We offer a competitive salary, the latest hardware, paid leave, and free organic buffet style lunch. Our team is diverse, highly motivated and very cosmopolitan.</p>
						
						<div class="job-positions-block">
							<h3 class="center">Open Positions</h3>
							
							<div class="job-positions-each">
								<div class="font-large"><strong>Junior Graphic Designer</strong> <em>(Remote possible)</em></div>
								<p><em>Skills:</em> Expertise in Photoshop, Illustrator, Responsive Web Design, Vector Design and Manipulation</p>								
							</div>

							<div class="job-positions-each">
								<div class="font-large"><strong>Senior Backend Developer</strong> <em>(Onsite)</em></div>
								<p><em>Skills:</em> Solid experience with PHP and the Laravel framework, OOP, developing and consuming RESTful APIs. 
								<br>
								We use Git for version control and Backbone.js on the frontend.</p>
							</div>							

							<div class="job-positions-each">
								<div class="font-large"><strong>iOS Developer</strong> <em>(Onsite)</em></div>
								<p><em>Skills:</em> Prototype, build, test and maintain iOS apps, with an in-depth understanding of Objective-C, Swift and Cocoa.
								</p>
							</div>													
						</div> <!-- /job-positions-block -->
					</div> <!-- /job-info -->
					<div class="overlay"></div>
				</div> <!-- /background-block -->

				<div class="form-join-block">
					<form class="form-join js-form-validate">
						<div class="heading-block">
							<h2 class="heading-secondary">Work with LiquidApt</h2>
							<div class="sub-heading">Drop us a line if you have what it takes</div>
						</div>
						<div class="container-mid">
							<div class="grid-parent">
								<div class="grid-child form-join-each">
									<div class="field-block">
										<label for="join-input-name" class="label label-required">Your name</label>
										<input type="text" class="input-text input-required" id="join-input-name">								
									</div>									
								</div>
								
								<div class="grid-child form-join-each">
									<div class="field-block">
										<label for="join-input-email" class="label label-required">Your email</label>
										<input type="email" class="input-text input-required" id="join-input-email">
									</div>
								</div>

								<div class="grid-child form-join-each">
									<div class="field-block">
										<label for="join-input-role" class="label label-required">Your role</label>
										<select id="join-input-role" class="input-text input-required">
											<option value="">Select a Value</option>
											<option value="senior-graphic-designer">Jr. Graphic Designer</option>
											<option value="backend-developer">Sr. Backend Developer</option>
											<option value="ios-developer">iOS Developer</option>
										</select>
									</div>
								</div>
							</div> <!-- /grid-parent -->

							<div class="field-block">
								<label for="join-input-info" class="label label-required">Your skill set</label>
								<textarea class="input-text input-required" id="join-input-info"></textarea>
							</div>

							<div class="field-block center">
								<input type="submit" class="button" value="Get in touch">
							</div>						
						</div> <!-- /container-mid -->
					</form>
				</div> <!-- /form-join-block -->
			</section> <!-- /join-block -->

		</main>
		<?php include "includes/footer.php"; ?>
		<?php include "includes/js-global.php"; ?>
	</body>

</html>
