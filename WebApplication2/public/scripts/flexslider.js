jQuery(window).load(function ($) {
    var $featured = jQuery('#featured'),
		featuredSlider = jQuery("meta[name=featuredSlider]").attr('content'),
		featuredSpeed = jQuery("meta[name=featuredSpeed]").attr('content'),
		$mobileNavButton = jQuery('#mobile_nav'),
		$nav = jQuery('ul#top-menu'),
		containerWidth = jQuery('#container').width(),
		$cloned_nav;

    if ($featured.length) {
        sliderSettings = {

            controlsContainer: '#featured #controllers_wrapper',
            slideshow: false
        }

        if ('1' === featuredSlider) {
            sliderSettings.slideshow = true;
            sliderSettings.slideshowSpeed = featuredSpeed;
        }

        sliderSettings.pauseOnHover = true;

        $featured.flexslider(sliderSettings);
    }

    if (!jQuery('html#ie7').length) {
        $nav.clone().attr('id', 'mobile_menu').removeClass().appendTo($mobileNavButton);
        $cloned_nav = $mobileNavButton.find('> ul');

        $mobileNavButton.click(function () {
            if (jQuery(this).hasClass('closed')) {
                jQuery(this).removeClass('closed').addClass('opened');
                $cloned_nav.slideDown(500);
            } else {
                jQuery(this).removeClass('opened').addClass('closed');
                $cloned_nav.slideUp(500);
            }
            return false;
        });

        $mobileNavButton.find('a').click(function (event) {
            event.stopPropagation();
        });

        jQuery(window).resize(function () {
            if (containerWidth != jQuery('#container').width()) {
                containerWidth = jQuery('#container').width();

                et_mobile_navigation_fix();
                et_footer_widgets_fix();
            }
        });

        
    }

    
});