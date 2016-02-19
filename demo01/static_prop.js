/**
 * Created by yicj on 2016/2/19.
 */
Vue.component('child',{
    props:['msg'],
    template:'<span>{{msg}}</span>'
}) ;


var exampleVM = new Vue({
    el:'#demo3'
}) ;
