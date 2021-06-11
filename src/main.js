import Keyboard from './KeyboardContainer.svelte';

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