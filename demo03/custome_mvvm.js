/**
 * Created by Administrator on 2016/3/16.
 */
(function (window) {
    function bindingModel (model,changeCallback){
        var propertiesMap = {} ;
        model._private = {} ;
        //将_private属性隐藏
        Object.defineProperty(model,"_private",{
            writable: true,
            enumerable: false,
            configurable: true
        }) ;

        function getFn(name){
            var result = this._private[name] ;
            console.info('get value : ' + name + ' = ' + result) ;
            return result;
        };
        function setFn(name,val){
            if(this._private[name]!=val){
                console.info("set value : " + name +" = " + val ) ;
                this._private[name] =val ;
                if(changeCallback){
                    changeCallback(name,val) ;
                }
            }
        };
        for(var elem in model){
            if(model.hasOwnProperty(elem)&&elem!="_private"&& typeof (model[elem])!='function'){
                (function (propName,propValue) {
                    model._private[propName] = propValue ;//init value
                    propertiesMap[propName] = {
                        get: function () {
                            return getFn.call(this,propName);
                        },
                        set: function (v) {
                            return setFn.call(this,propName,v)
                        },
                        enumerable:true,
                        configurable:true
                    } ;

                })(elem,model[elem]) ;
            }
        }
        Object.defineProperties(model,propertiesMap) ;
    }
    function bindingBoth(model,dom){
        dom.find("[bindKey]").each(function (item) {
            var key = $(this).attr("bindKey") ;
            $(this).val(model[key]) ;
            $(this).bind("input", function () {
                model[key] = $(this).val() ;
            }) ;
        }) ;
        bindingModel(model, function (name,val) {
            var el = dom.find("[bindkey="+name+"]") ;
            if(el.val()!=val){
                el.val(val) ;
            }
        });
    }
    window.bindingBoth = bindingBoth ;
})(window) ;