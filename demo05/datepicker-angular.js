/**
 * Created by yicj on 2016/5/2.
 */
(function ($) {
    $('[data-toggle="datepicker"]').datepicker({language:'zh-CN',format: 'yyyy-mm-dd'});
    var app = angular.module('app',[]) ;
    app.controller('IndexController',function($scope){
        $scope.myText = 'No Selected' ;

        $scope.data = {
            date:''
        } ;

        $scope.submit = function(){
            console.info(JSON.stringify($scope.data)) ;
        }

        $scope.updateMyText = function(text){
            $scope.myText  = 'Selected' ;
        }
    }) ;


    app.directive('datepicker', function () {
        return {
            restrict:'A',
            require:'?ngModel',
            scope:{
              select:'&'
            },
            link: function (scope,elem,attrs,ngModel) {
                if(!ngModel) return ;
                var optionObj = {} ;
                optionObj.dateFormat = 'mm/dd/yy' ;

                console.info(ngModel.$viewValue) ;
            }
        } ;
    }) ;

})(jQuery) ;