import Vue from 'vue'
import App from './App.vue'
console.log('Running App version ' + VERSION); 
console.log('Is production Environment ' + PRODUCTION); 
console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production') {
    console.log('envrionment: prodction')
} else {
    console.log('envrionment: development')
}
var app = new Vue({
    el: '#app',
    components: { App },
    template: '<App />'
})
