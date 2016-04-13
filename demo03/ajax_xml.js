/**
 * Created by Administrator on 2016/3/3.
 */
var util = {} ;
util.dealAjaxRequest4JSObj = function(serverURL,jsObjData){//异步操作
    var defer = $.Deferred();
    var option = {
        contentType:'application/json' ,
        url:serverURL,
        type: 'POST',
        timeout : 100000, //超时时间设置，单位毫秒
        data:JSON.stringify(jsObjData),
        dataType:'xml',
        error: function (data) {
            alert('操作出错!') ;
        },
        success:function (result) {
            defer.resolve(result);
        }
    };
    $.ajax(option); //发送ajax请
    return defer.promise() ;
}

function getXmlData(){
    console.info('get xml data is called ...') ;
    var serverURL = "" ;
    var jsObjData = {name:'yicj'} ;
    var ajaxing = util.dealAjaxRequest4JSObj(serverURL,jsObjData) ;
    $.when(ajaxing)
        .done(function (data) {
            console.info(data) ;
        })
        .fail(function (err) {
             console.info(err) ;
        }) ;
};