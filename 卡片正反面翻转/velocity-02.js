(function($){

	var container = $(".container") ;
	var box = $(".box") ;
	var buddy = $(".buddy") ;//head
	var pop = $(".pop") ;
	var open = $(".btn") ;
	var close = $(".close") ;
	var imgs = pop.find("img") ;

	//box进场
	$.Velocity.RegisterUI("yicj.slideUpIn",{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],translateY:[0,100]}]
		]
	}) ;
	//box出场
	$.Velocity.RegisterUI("yicj.slideDownOut",{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],translateY:[100,0]}]
		]
	}) ;
	//img进场
	$.Velocity.RegisterUI("yicj.scaleIn",{
		defaultDuration:300,
		calls:[
			[{opacity:[1,0],scale:[1,0.3]}]
		]
	}) ;
	//img出场
	$.Velocity.RegisterUI("yicj.scaleOut",{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],translateY:[0.3,1]}]
		]
	}) ;

	var seqInit = [{
			elements:container,
			properties:"yicj.slideUpIn",
			options:{
				delay:300,
			}
		},
		{
			elements:box,
			properties:"yicj.slideUpIn",
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:buddy,
			properties:"yicj.slideUpIn",
			options:{
				delay:60,
				sequenceQueue:false
			}
		}
	] ;

	var seqClick = [
		{
			elements:container,
			properties:"yicj.slideDownOut",
		},
		{
			elements:box,
			properties:"yicj.slideDownOut",
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:container,
			properties:"yicj.slideUpIn",
		},
		{
			elements:pop,
			properties:"yicj.slideUpIn",
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:imgs,
			properties:"yicj.scaleIn",
		}	

	] ;


	var seqClose = [
		{
			elements:imgs,
			properties:"yicj.scaleOut",
		},
		{
			elements:container,
			properties:"yicj.slideDownOut",
		},
		{
			elements:pop,
			properties:"yicj.slideDownOut",
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:container,
			properties:"yicj.slideUpIn",
		},
		{
			elements:box,
			properties:"yicj.slideUpIn",
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:buddy,
			properties:"yicj.slideUpIn",
			options:{
				delay:60,
				sequenceQueue:false
			}
		}
	] ;

	$.Velocity.RunSequence(seqInit) ;

	open.on("click",function(){
		console.info('hello world') ;
		$.Velocity.RunSequence(seqClick) ;
	}) ;

	close.on("click",function(){
		$.Velocity.RunSequence(seqClose) ;
	}) ;

})(jQuery) ;