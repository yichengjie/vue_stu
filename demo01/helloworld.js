'use strict' ;
/**
 * Created by yicj on 2016/2/19.
 */
var exampleData ={
    name:'Vue.js',
    list:[],
    showFlag:true
} ;
var exampleVM = new Vue({
    el:'#example-1',
    data:exampleData,
    methods: {
        greet: function (event) {
            this.showFlag = !this.showFlag ;
        }
    },
    ready:function(){
        getAsynData(this.$data) ;
    }
}) ;

//模拟异步获取数据
function getAsynData (FormData){
    setTimeout(function(){
        initData(FormData) ;
    },2000) ;
}

function initData(FormData){
    for(var i = 0 ; i < 5 ; i ++){
        FormData.list.push('yicj' +i) ;
    }
}