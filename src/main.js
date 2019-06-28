import Vue from 'vue'
const say = require('./utils')
console.log('main')
say()

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
