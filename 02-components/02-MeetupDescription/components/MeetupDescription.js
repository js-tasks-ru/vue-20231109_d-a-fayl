import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',
  props: {
    description: {
      default: `The meetup doesn't have a description`,
      type: String,
    },
  },

  template: `<p class="meetup-description">{{description}}</p>`,
});
