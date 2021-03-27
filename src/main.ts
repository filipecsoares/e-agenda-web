import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faUserPlus, faSignInAlt, faSignOutAlt, faHome, faCalendar, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-toastification/dist/index.css';

library.add(faUser, faUserPlus, faSignInAlt, faSignOutAlt, faHome, faCalendar, faSearch);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Toast, { position: POSITION.TOP_RIGHT });
app.use(router).mount('#app');
