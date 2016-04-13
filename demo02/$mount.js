/**
 * Created by Administrator on 2016/2/21.
 */

//创建可复用的构造器
var Profile = Vue.extend({
    template:'<p>{{firstName}} {{lastName}} aka {{alias}}</p>'
}) ;

//创建一个Profile实例
var profile = new Profile({
    data:{
        firstName:'Walter',
        lastName:'White',
        alias:'Heisenberg'
    },
    ready: function () {
        console.info(' ready ....') ;
    }
}) ;

//挂载到元素上
profile.$mount('#mount-point') ;
var vm = new Vue({
    el:'#app'
}) ;