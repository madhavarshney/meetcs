import App from './views/App.svelte';

const app = new App({
  target: document.body,
  props: {},
});

window.app = app;

export default app;
