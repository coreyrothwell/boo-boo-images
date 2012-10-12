/*
** Easy jQuery Responsive Images 
** By Corey Rothwell @corey_rothwell
*/
;(function($,window){
	
	$.fn.sizer = function(opts){
		
		var settings = $.extend({
			breakWidth: 480, 
			onWindowResize: true,
			dataAttr: 'data-ri-big'
		}, opts),

		changey = function(a){
			var image = a,
				src = image.attr('src');

			if($(window).width() > settings.breakWidth){
				var big = image.attr(settings.dataAttr);
				if(big !== ''){
					image.attr('src', big);
				}
			} 
		},
		sizey = function(a){
			$(window).resize(function(){
				changey(a);
			});
		};		

		return this.each(function(){
			changey($(this));			
			if(settings.onWindowResize) {
				sizey($(this));
			}
		});
	}
	
}(jQuery,this));