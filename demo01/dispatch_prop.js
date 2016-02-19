/**
 * Created by yicj on 2016/2/19.
 */
Vue.component('child',{
    template:'#child-template',
    data:function(){
        return {msg:'hello'} ;
    },
    methods:{
        notify:function(){
            if(this.msg.trim()){
                this.$dispatch('child-msg',this.msg) ;
                this.msg = '' ;
            }
        }
    }
}) ;

var parent = new Vue({
    el:'#demo',
    data:{
        messages:[]
    },
    events:{
        'child-msg':function(msg){
            this.messages.push(msg) ;
        }
    }
}) ;