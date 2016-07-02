/**
 * Created by yicj on 2016/7/2.
 */
var Vue = require('vue') ;
var htmlTpl = require('./tpls/counter.html') ;

var Counter = Vue.extend({
    data:function(){
       return{
           count: 0
       } ;
    },
    ready:function(){
        var _self = this ;
        this.handle = setInterval(function(){
            _self.count++ ;
        },1000) ;
    },
    destroyed:function(){
        clearInterval(this.handle)
    },
    template: htmlTpl
}) ;

module.exports = Counter ;
