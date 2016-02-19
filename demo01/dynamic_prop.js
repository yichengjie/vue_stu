/**
 * Created by yicj on 2016/2/19.
 */

Vue.component('child', {
    // camelCase in JavaScript
    props: {
        myMessage:{
            type:Number,
            default:''
        }
    },
    template: '<span>{{ myMessage }}</span>'
})

var vm = new Vue({
    el:"#demo",
    data:{parentMsg:'hello'}
}) ;