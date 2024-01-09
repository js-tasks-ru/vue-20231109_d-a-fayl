<template>
  <div class="pagination-container" v-for="item in itemsChunk">
    <slot :item="item"></slot>
  </div>
</template>

<script>
export default {
  name: 'UiPaginationView',

  props: {
    page: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    perPage: {
      type: Number,
      required: true,
      validator: (value) => value > 0,
    },

    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    itemsChunk() {
      const res = [];
      for (let i = 0; i < this.items.length; i += this.perPage) {
        const chunk = this.items.slice(i, i + this.perPage);
        res.push(chunk);
      }
      return res[this.page - 1];
    },
  },
};
</script>

<style></style>
