/**
 * Created by yicj on 2016/5/2.
 */
var services = angular.module('app.services',[]) ;

services.factory('ErrorService', function () {
    return {
        errorMessage:null,
        setError: function (msg) {
            this.errorMessage = msg ;
        },
        clear:function(){
            this.errorMessage = null ;
        }
    } ;
}) ;

//把拦截器注册成一个服务，拦截所有的angular ajax http调用
services.factory('errorHttpInterceptor',['$q','$location','ErrorService','$rootScope',
    function ($q, $location, ErrorService, $rootScope) {
        return function (promise){
            return promise.then(function (reponse) {
                return reponse ;
            }, function (response) {
                if(response.status===401){
                    $rootScope.$broadcast('event:loginRequired') ;
                }else if(response.status >= 400 && response.status < 500){
                    ErrorService.setError('Server was unable to find ' +
                        'what you were looking for ... Sorry !!') ;
                    return $q.reject(response) ;
                }
            }) ;
        }
    }]) ;

services.config( function ($httpProvider) {
    //console.info($httpProvider) ;
    //$httpProvider.responseInterceptors.push('errorHttpInterceptor') ;
    $httpProvider.interceptors.push('errorHttpInterceptor') ;
}) ;



services.factory('authHttp',['$http','Authentication', function ($http,Authentication) {
    var authHttp = {} ;
    //在请求上添加正确的头信息
    var extendHeaders = function (config) {
        config.headers = config.headers || {} ;
        config.headers['Authorization'] = Authentication.getTokenType() +
                ' ' + Authentication.getAccessToken() ;
    } ;
    //针对每一个$http调用都需要做一下事情
    angular.forEach(['get','delete','head','jsonp'], function (name) {
        authHttp[name] = function (url,config) {
            config = config || {} ;
            extendHeaders(config) ;
            return $http[name](url,config) ;
        }
    }) ;
    angular.forEach(['post','put', function (name) {
        authHttp[name] = function (url, data, config) {
            config = config || {} ;
            extendHeaders(config) ;
            return $http[name](url,data,config) ;
        }
    }]) ;
    return authHttp ;
}]) ;



var directives = angular.module('app.directives',[]) ;

directives.directive('alertBar',['$parse', function ($parse) {
    return {
        restrict:'A',
        template: function () {
            var retHtml = '' ;
            retHtml += '<div class="alert alert-danger" ng-show="errorMessage">' ;
            retHtml += '<button type="button" class="close" ng-click="hideAlert()">&times;</button>' ;
            retHtml += '{{errorMessage}}' ;
            retHtml += '</div>' ;
            return retHtml ;
        },
        link:function(scope,elem,attrs){
            var alertMessageAttr = attrs['alertmessage'] ;
            scope.errorMessage = null ;
            scope.$watch(alertMessageAttr, function (newVal) {
                scope.errorMessage = newVal ;
            });

            scope.hideAlert = function () {
                scope.errorMessage = null ;
                //同时清除绑定变量上的错误信息
                //这样做之后，当同样的错误再次出现时，alert bar会再次显示出来
                $parse(alertMessageAttr).assign(scope,null) ;
            }
        }
    } ;
}]) ;

var app = angular.module('app',['app.services','app.directives']) ;
app.controller('IndexController',['$scope', 'ErrorService',function ($scope,ErrorService) {
    $scope.errorService = ErrorService ;
    $scope.$on('event:loginRequired', function () {
        $location.path('/login') ;
    }) ;

    $scope.data = {
        name:'yicj'
    } ;

    $scope.hello = function () {
        var message = $scope.data.name || 'hello world' ;
        $scope.errorService.setError(message) ;
    }
}]) ;
