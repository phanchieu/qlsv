import Vue from 'vue'
import App from './App.vue'
// import addStudent from './components/addStudent.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
