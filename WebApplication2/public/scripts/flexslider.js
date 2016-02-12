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

        et_mobile_navigation_fix();
        et_footer_widgets_fix();
    }

    function et_mobile_navigation_fix() {
        var et_left;

        if (containerWidth <= 480) {
            et_left = (containerWidth - $mobileNavButton.innerWidth()) / 2;
            if (containerWidth <= 300) {
                et_left = et_left - 31;
            } else {
                et_left = et_left - 52;
            }
            $cloned_nav.css('left', '-' + et_left + 'px');
        }
    }

    function et_footer_widgets_fix() {
        var $footer_widget = jQuery("#footer-widgets .footer-widget"),
			footer_columns_num;

        footer_columns_num = containerWidth <= 768 ? 3 : 4;

        if ($footer_widget.length) {
            $footer_widget.removeClass('last').closest('#footer-widgets').find('div.clear').remove();

            $footer_widget.each(function (index, domEle) {
                if ((index + 1) % footer_columns_num == 0) jQuery(domEle).addClass("last").after("<div class='clear'></div>");
            });
        }
    }
});