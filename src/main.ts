import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faUserPlus, faSignInAlt, faSignOutAlt, faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faUser, faUserPlus, faSignInAlt, faSignOutAlt, faHome);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router).mount('#app');
