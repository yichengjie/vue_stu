/**
 * Created by yicj on 2016/2/29.
 */
var vm = new Vue({
    el:"#app",
    data:{
        name:'yicj',
        email:'',
        password:''
    },
    methods:{
        submit:function(e){
            //console.info(e) ;
            console.info(JSON.stringify(this.$data)) ;
        }
    }
}) ;


