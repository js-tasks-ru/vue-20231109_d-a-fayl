import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      emails: [
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
      ],
      searchValue: '',
    };
  },
  computed: {
    /* filteredEmails() {
      this.$refs.li.forEach((li) => {
        if (li.innerText.toLowerCase().includes(this.searchValue) && this.searchValue) {
          li.classList.add('marked');
        } else {
          li.classList.remove('marked');
        }
      });
    }, */
  },
  watch: {
    searchValue(newValue) {
      this.$refs.li.forEach((li) => {
        if (li.innerText.toLowerCase().includes(newValue) && newValue) {
          li.classList.add('marked');
        } else {
          li.classList.remove('marked');
        }
      });
    },
  },
});

const vm = createApp(App).mount('#app');
