import Keyboard from './Keyboard.svelte';

const printMe = (message) => {
	console.log(message);
};

const app = new Keyboard({
	target: document.body,
	props: {
		submitCallback: printMe
	}
});

export default app;