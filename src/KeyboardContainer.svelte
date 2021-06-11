<script>
	import Keyboard from './Keyboard.svelte';

	let message = "";
	let isCaps = false;

	let inputRef;

	const onSend = () => {
		inputRef.focus()
	};

	function backspace () {
		let newMessage = message.substring(0, message.length -1);
		message = newMessage;
	}

	function enter() {
		let newMessage = message + "\n";
		message = newMessage;
	}

	function toggleCaps () {
		isCaps = !isCaps;
	}

	function updateMessage (newMessage) {
		if(isCaps){
			message += newMessage.toUpperCase();
		}else{
			message += newMessage;
		}
	}
</script>

<main>
	<div class="container">
		<h1>Virtual Keyboard w/ HTML, CSS, JS and Svelte</h1>
		<div class="header-container">
			<div class="left-half">
				<div class="header-title">
					Features
				</div>
				<ul>
					<li>Easy to integrate</li>
					<li>Responsive</li>
					<li>Built using Svelte</li>
				</ul>
			</div>
			<div class="right-half">
				<textarea bind:this={inputRef} value={message} class="text-type"></textarea>
			</div>
		</div>
		<div class="keyboard-container">
			<Keyboard
				autoFocusCallback={onSend}
				enterCallback={enter}
				backspaceCallback={backspace}
				toggleCapsCallback={toggleCaps} 
				addCallback={updateMessage}
				isCapsEnabled={isCaps}
			/>
		</div>
	</div>
</main>

<style>
	main{
		padding: 0;
	}
	h1{
		color: #20B2AA;
		text-decoration: underline;
		padding: 0;
		margin: 0;
	}
	div.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	div.header-container {
		display: flex;
		height: 30%;
	}
	div.keyboard-container {
		height: 53%;
	}
	div.left-half {
		flex-direction: row;
		width: 50%;
	}
	div.right-half {
		flex-direction: row;
		width: 45%;
		padding: 20px;
	}
	textarea.text-type{
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
</style>