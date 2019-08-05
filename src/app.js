import Vue from 'vue';
import Main from './components/Main.vue';
import NavBar from './components/NavBar.vue';

new Vue({
  render: (createEl) => createEl(Main),
}).$mount('#app');

new Vue({
  render: (createEl) => createEl(NavBar),
}).$mount('#navBar');
