import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  methods: {
    incrementCount(value) {
      this.$emit('update:count', ++value);
    },
  },

  template: `<button :value="count" type="button" @click='incrementCount($event.target.value)'>{{count}}</button>`,
});
