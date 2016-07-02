/**
 * Created by yicj on 2016/7/2.
 */
var Vue = require('vue') ;
var aHtml = require('./tpls/a.html') ;

var CompA = Vue.extend({
    data:function(){
       return {
           msg: 'Hello from Component A!'
       };
    },
    template: aHtml
}) ;

module.exports = CompA ;
