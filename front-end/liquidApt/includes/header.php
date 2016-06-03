<header class="header">
	<div class="clearfix">
		<div class="logo-block grid-child">
			<a href="index.php" class="logo">LiquidApt</a>
		</div> <!-- /logo-block -->
		<a href="" class="nav-trigger icon-menu"></a>
		<nav class="nav-block">
			<ul class="ul-base nav">
				<li><a href="overview.php">Overview</a></li>
				<li><a href="team.php">Team</a></li>
				<li><a href="featured.php">Featured</a></li>
				<li><a href="contact.php">Contact</a></li>
				<li><a href="#popup-sign-up" class="button button-signup-trigger"><strong>Sign-up</strong></a></li>
			</ul>
		</nav>
	</div>
</header>

<!-- Lightbox: Sign up content -->
<div id="popup-sign-up" class="popup-inline mfp-hide">
	<div class="heading-block">
		<h2 class="heading-secondary">Sign Up</h2>
		<div class="sub-heading">LiquidApt is free, forever</div>	
	</div>
  <form class="form-sign-up js-form-validate">
  	<div class="grid-parent">
	  	<div class="field-block sign-up-each grid-child">
	  		<label for="s-username" class="label label-required">Username</label>
	  		<input type="text" class="input-text input-required" id="s-username">
	  	</div>

	  	<div class="field-block sign-up-each grid-child">
	  		<label for="s-email" class="label label-required">Email</label>
	  		<input type="email" class="input-text input-required" id="s-email">
	  	</div>
	  </div> <!-- /grid-parent -->

  	<div class="grid-parent">
	  	<div class="field-block sign-up-each grid-child">
	  		<label for="s-password" class="label label-required">Password</label>
	  		<input type="password" class="input-text input-required" id="s-password">
	  	</div>

	  	<div class="field-block sign-up-each grid-child">
	  		<label for="s-password-confirm" class="label label-required">Confirm password</label>
	  		<input type="password" class="input-text input-required" id="s-password-confirm">
	  	</div>
	  </div> <!-- /grid-parent -->

  	<div class="field-block">
  		<input type="submit" class="button full-width" value="Sign up">
  	</div>
  </form>
</div> <!-- /popup-inline -->