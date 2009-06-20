(function($) {
	$.fn.prettyPhotoLauncher = function(settings) {
		 var settings = $.extend({
			prettyPhotoSelector : 'prettyPhoto'
		}, settings);


		return this.each(function(){
			var $theLink = $(this),
					$theRel = $theLink.attr('rel'),
					$theHref = $theLink.attr('href'),
					galleryRegExp = /\[(?:.*)\]/,
					theGallery = galleryRegExp.exec($theRel),
					prettyPhotoGallery = settings.prettyPhotoSelector+theGallery;

			$("a[rel="+prettyPhotoGallery+"]").each(function(i, galleryElement) {
				if ($theHref == $(galleryElement).attr('href')) {
				  $theLink.click(function(){
				    $(galleryElement).click();
				    return false;
					}); 
				}
			});
		});
	};
})(jQuery);