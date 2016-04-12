<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>LiquidApt: Responsive Site Builder</title>
		<?php include "includes/head.php"; ?>
		<style>
			.header, .nav-block {
				background-color: #eee;
			}

			.header {
				box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
			}

			a.logo {
				color: #9D67AD;
			}

			a.nav-trigger, .nav li a:not(.button) {
				color: #555;
			}
		</style>
	</head>

	<body>
		<?php include "includes/header.php"; ?>
		<main class="main">
			<section class="container-main">
				<div class="center">
					<div class="banner-home">
						<div class="heading-block">
							<h1 class="heading-primary heading-primary--banner">Drag . Drop . Build.</h1>
							<div class="sub-heading sub-heading--banner">Create a free, responsive site in minutes!</div>
						</div>
						<div class="banner-img-block clearfix">
			  			<img src="assets/img/featured/selvin-escape-velocity.jpg" alt="Banner Home: 1" class="banner-img banner-img-1" width="280">
			  			<img src="assets/img/featured/ramesh-parallelism.jpg" alt="Banner Home: 2" class="banner-img banner-img-2" width="280">
			  			<img src="assets/img/featured/jason-photon.jpg" alt="Banner Home: 3" class="banner-img banner-img-3" width="280">
						</div> <!-- /banner-img-block -->
						<a href="overview.php" class="button button-hollow button-explore">Explore</a>
						<a href="#popup-sign-up" class="button button-signup-trigger">Get LiquidApt Now</a>				
					</div> <!-- /banner-home -->
				</div> <!-- /center -->
			</section> <!-- /container-main -->
		</main>

		<?php include "includes/js-global.php"; ?>
	</body>
	
</html>
