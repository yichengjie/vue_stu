/**
 * Created by yicj on 2016/2/22.
 */

$(function () {
    $('#openBtn').bind('click',function(){
        var $modal = $('#abortModal').removeClass('fade') ;
        var $p = $modal.find('.modal-dialog') ;
        console.info($p) ;
        var win_width = $(document).width() ;
        var win_hight = $(document).height() ;
        console.info(win_hight +" , " + win_width) ;
        var p_width = $p.outerWidth() ;
        var p_higth = $p.outerHeight() ;
        //console.info(p_higth +" , " + p_width) ;
        var left = (win_width- p_width)/2 ;
        //var top = (win_hight-p_higth)/2 ;
        var top = 200 ;
        console.info(left +" , " + top) ;
        $p.css({left:left+"px",top:top+"px"}) ;


    }) ;
}) ;
