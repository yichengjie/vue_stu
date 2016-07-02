/**
 * Created by yicj on 2016/7/2.
 */
var Vue = require('vue') ;
var CompA = require('./components/a') ;
var CompB = require('./components/b') ;
var Counter = require('./components/counter') ;
var appHtml = require('./tpls/app.html') ;

var CompApp = Vue.extend({
  data:function(){
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  template: appHtml,
  components: {
    // <my-component> 只能用在父组件模板内
    'comp-a': CompA,
    'comp-b': CompB,
    'counter': Counter
  }
}) ;

module.exports = CompApp ;

