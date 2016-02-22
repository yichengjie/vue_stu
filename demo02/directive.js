/**
 * Created by Administrator on 2016/2/21.
 */
Vue.config.debug = true ;

Vue.directive('hello',{
    bind:function(){
        console.info('hello directive bind....') ;
    },
    update: function () {
        console.info('hello directive directive update') ;
    },
    unbind: function () {
        console.info('hello directive unbind...') ;
    }
}) ;


Vue.directive('demo', {
    bind: function () {
        console.log('demo bound!')
    },
    update: function (value) {
        this.el.innerHTML =
            'name - '       + this.name + '<br>' +
            'expression - ' + this.expression + '<br>' +
            'argument - '   + this.arg + '<br>' +
            'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
            'value - '      + value
    }
});

Vue.directive('datepicker',{
    params: ['min'],
    bind:function(){
        console.info('param min is : ' + this.params.min) ;
        var $el = $(this.el) ;
        $el.val(this.params.min) ;
        $el.datetimepicker({format: 'yyyy-mm-dd hh:ii'});
    },
    update: function (value) {
        console.info('value : '+ value) ;
    },
    unbind: function () {
    }
}) ;


// 定义
var SearchComponent = Vue.extend({
    created: function () {
        console.info('create ....') ;
    },
    ready: function () {
       console.info('ready ...') ;
       this.$log() ;
    },
    template:'<div><ul><li v-for="li in list">{{li.name}}</li></ul><input type="text" v-model="info"/><button v-on:click="greet" name="test" class="btn btn-success">自定义</button></div>',
    props: {info:{
                type: String,
                required: true
            },
        list:Array
    },
    methods:{
        greet: function (event) {
            // 方法内 `this` 指向 vm
            console.info('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            console.info(event.target.tagName) ;
            this.info = 'click me' ;
            console.info(this.info) ;
            this.list.push({name:'d'});
        }
    }
})

// 注册
Vue.component('search', SearchComponent) ;

var vm = new Vue({
    el:'#app',
    data: {
        msg: 'hello!',
        list:[{name:'a'},{name:'b'},{name:'c'}]
    }
}) ;



