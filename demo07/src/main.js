/**
 * Created by yicj on 2016/7/1.
 */
var Vue = require('vue') ;
var App = require('./app.vue') ;
new Vue({
    el: 'body',
    components: {
        app: App
    }
})