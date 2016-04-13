/**
 * Created by yicj on 2016/2/22.
 */
Vue.directive('demo',{
    acceptStatement:true,
    bind: function () {
        this.el.style.cssText = 'color:red;background:#666' ;
    },
    update: function (value) {
        console.info('demo directive method update is called .... value : ' +value ) ;
        this.el.innerHTML = 'name = ' + this.name +'<br/>' +
                'arg = ' + this.arg +'<br/>'+
                'expression = ' + this.expression +'<br/>' +
                'value = ' + value +'<br/>';
        console.info(this.vm.$data) ;
        console.info(this.el === this.vm.$el) ;
        console.info(this.vm.$el) ;
    },
    unbind: function () {
        
    }
}) ;


var vm = new Vue({
    el:'#app',
    data:{
        message:'hello world'
    },
    methods:{
        onClick: function () {
            //custom directive update will be called ..
            this.$data.message = 'hahaha!' ;
        }
    }
}) ;