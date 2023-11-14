import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      firstOperandValue: 0,
      secondOperandValue: 0,
      operator: '',
    };
  },
  computed: {
    result() {
      let result = 'Choose an opertor';
      switch (this.operator) {
        case 'sum':
          result = this.firstOperandValue + this.secondOperandValue;
          break;
        case 'subtract':
          result = this.firstOperandValue - this.secondOperandValue;
          break;
        case 'multiply':
          result = this.firstOperandValue * this.secondOperandValue;
          break;
        case 'divide':
          result = this.firstOperandValue / this.secondOperandValue;
          break;
      }
      return result;
    },
  },
});

const vm = createApp(App).mount('#app');
