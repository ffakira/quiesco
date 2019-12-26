<DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Quiesco</title>
		<link rel="stylesheet" href="./public/css/style.css" />
	</head>
	<body>
		<?php include_once('./partials/nav.php'); ?>
		<div class="container">
			<aside class="sidebar">
				<h3>Weekly Challenges</h3>
				<p class="text-center">Last updated: 26th Dec, 2019 (Thu)</p>
				<canvas width="193" height="267" style="border: 1px solid black;" id="skillCanvas" />
				<?php include_once('./icon.php'); ?>

				<ul>
					<li><img alt="Attack" src="./public/img/Attack_icon.png"> Level 10</li>
				</ul>
			</aside>
			<article class="content">
				<h1>Quiesco</h1>
				<p>God knows what is the website is about, but let's do for the memes. My Youtube will consists stuff that doesn't make any sense at all.</p>
			</article>
		</div>
		<?php include_once("./partials/footer.php"); ?>

		<script type="text/javascript" src="./public/js/script.js"></script>
	</body>
</html>
