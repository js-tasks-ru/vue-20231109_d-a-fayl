import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      value: 0,
    };
  },
  methods: {
    increaseValue() {
      this.value += 1;
    },
  },
});

const vm = createApp(App).mount('#app');
