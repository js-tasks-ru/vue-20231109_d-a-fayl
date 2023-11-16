import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';
const App = defineComponent({
  name: 'App',
  data() {
    return {
      inputValue: '',
      MeetupTitle: '',
    };
  },
  methods: {
    async fetchMeetupByID(meetupId) {
      try {
        const response = await fetch(`${API_URL}/meetups/${meetupId}`);
        if (response.ok) {
          const result = await response.json();
          this.MeetupTitle = result.title;
        }
      } catch (error) {
        alert(error);
      }
    },
  },
  watch: {
    inputValue(newValue) {
      this.fetchMeetupByID(newValue);
    },
  },
});

const vm = createApp(App).mount('#app');
