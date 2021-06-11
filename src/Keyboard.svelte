<script>
	import KeyboardLayout from './KeyboardLayout.svelte';

	export let submitCallback;

	let message = "";
	let isCaps = false;

	let inputRef;

	const onSend = () => {
		inputRef.focus()
	};

	function onSubmit() {
		submitCallback(message);
		message = "";
	}

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

<div class="outermost-container">
	<div class="container">
		<div class="header-container">
				<textarea bind:this={inputRef} value={message} class="text-type"></textarea>
		</div>
		<div class="keyboard-container">
			<KeyboardLayout
				submitCallback={onSubmit}
				autoFocusCallback={onSend}
				enterCallback={enter}
				backspaceCallback={backspace}
				toggleCapsCallback={toggleCaps} 
				addCallback={updateMessage}
				isCapsEnabled={isCaps}
			/>
		</div>
	</div>
</div>

<style>
	div.outermost-container {
		padding: 0;
		height: 100%;
	}
	div.container {
		width: 100%;
		height: 100%;
	}
	div.header-container {
		display: flex;
		height: calc(100vh - 350px);
	}
	div.keyboard-container {
		align-self: flex-end;
		width: 100%;
		margin-top: 10px;
	}
	textarea.text-type{
		width: 100%;
		height: 100%;
		border: 2px solid black;
		overflow-y: auto;
	}
</style>