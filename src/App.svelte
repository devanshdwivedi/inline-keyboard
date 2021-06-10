<script>
</script>

<main>
	<h1>Virtual Keyboard w/ HTML, CSS, JS and Svelte</h1>
	<div class="container">
		<div class="header-container">
			<div class="left-half">
				<div class="header-title">
					Features
				</div>
				<ul>
					<li>Easy to integrate</li>
					<li>Responsive</li>
					<li>Vanilla JS (Svelte)</li>
				</ul>
			</div>
			<div class="right-half">
				<textarea class="text-type"></textarea>
			</div>
		</div>
		<div class="keyboard-container">
			<div class="header-title">
				This is a placeholder for a keyboard
			</div>
		</div>
	</div>
</main>

<style>
	h1{
		color: #20B2AA;
		text-decoration: underline;
		padding: 10px 20px;
	}
	div.header-title {
		font-weight: bolder;
	}
	div.container {
		padding: 0 20px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	div.header-container {
		display: flex;
		margin-bottom: 100px;
		height: 30vh;
	}
	div.keyboard-container {
		height: 20vh;
	}
	div.left-half {
		flex-direction: row;
		width: 50%;
	}
	div.right-half {
		flex-direction: row;
		width: 45%;
	}
	textarea.text-type{
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
</style>