import Vue from 'vue'
import App from './App.vue'
const say = require('./utils')
console.log('main')
say()

var app = new Vue({
    el: '#app',
    components: { App },
    template: '<App />'
})
