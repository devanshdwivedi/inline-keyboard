import KeyboardContainer from './KeyboardContainer.svelte';

const printMe = (message) => {
	console.log(message);
};

const app = new KeyboardContainer({
	target: document.body,
	props: {
		submitCallback: printMe
	}
});

export default app;