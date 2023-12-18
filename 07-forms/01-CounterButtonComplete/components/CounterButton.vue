<template>
  <button @click="incrementCount">{{ computedCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  data() {
    return {
      localCount: this.count,
    };
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  methods: {
    incrementCount() {
      this.$emit('update:count', ++this.localCount);
    },
  },
  computed: {
    computedCount() {
      if (this.count) {
        return this.count;
      } else {
        return this.localCount;
      }
    },
  },
};
</script>
