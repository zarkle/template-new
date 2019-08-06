import Vue from 'vue';
import Main from './Main.vue';
import TheNavbar from './components/TheNavbar.vue';

new Vue({
  render: (createEl) => createEl(Main),
}).$mount('#app');

new Vue({
  render: (createEl) => createEl(TheNavbar),
}).$mount('#navBar');
