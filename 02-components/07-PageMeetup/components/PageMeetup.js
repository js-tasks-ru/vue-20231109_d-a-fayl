import { defineComponent } from '../vendor/vue.esm-browser.js';
import { fetchMeetupById } from '../meetupService.js';

import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo.js';
import MeetupAgendaItem from '../../05-MeetupAgenda/components/MeetupAgendaItem.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda';
import MeetupView from '../../06-MeetupView/components/MeetupView';

export default defineComponent({
  name: 'PageMeetup',
  props: {
    meetupId: {
      type: [Number],
      required: true,
    },
  },
  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
    MeetupAgenda,
    MeetupView,
  },
  data() {
    return {
      meetup: null,
      errorMessage: null,
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    fetchMeetupById(this.meetupId)
      .then((meetup) => {
        this.meetup = meetup;
      })
      .catch((error) => {
        this.errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  },
  watch: {
    meetupId(newID) {
      this.isLoading = true;
      fetchMeetupById(newID)
        .then((meetup) => {
          this.meetup = meetup;
        })
        .catch((error) => {
          this.meetup = null;
          this.errorMessage = error.message;
        })
        .finally(() => (this.isLoading = false));
    },
  },

  template: `
    <div class="page-meetup">
      <UiContainer v-if="isLoading">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
      <template v-else>
        <MeetupView v-if="meetup" :meetup="meetup" />
        <UiContainer v-else>
          <UiAlert> {{errorMessage}} </UiAlert>
        </UiContainer>
      </template>
    </div>`,
});
