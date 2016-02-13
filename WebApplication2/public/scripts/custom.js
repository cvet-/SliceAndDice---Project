jQuery.noConflict();

jQuery(document).ready(function () {
    var et_theme_folder = jQuery("meta[name=et_theme_folder]").attr('content'),
		$et_top_menu = jQuery('ul#top-menu > li > ul'),
		disableToptier = jQuery("meta[name=disableToptier]").attr('content');

    jQuery('ul.nav').superfish({
        delay: 600,
        animation: { opacity: 'show', height: 'show' },
        speed: 'fast',
        autoArrows: true,
        dropShadows: false


    });


    if (disableToptier == 1) jQuery("ul.nav > li > ul").prev("a").attr("href", "#");

    var $comment_form = jQuery('form#commentform');
    $comment_form.find('input:text, textarea').focus(function () {
        if (jQuery(this).val() === jQuery(this).next('label').text()) jQuery(this).val("");
    }).blur(function () {
        if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).next('label').text());
    });



    jQuery('.service .thumb a').hover(function () {
        jQuery(this).find('img').stop(true, true).fadeTo('fast', 0.8).end().find('span').fadeTo('fast', 1);
    }, function () {
        jQuery(this).find('img').stop(true, true).fadeTo('fast', 1).end().find('span').fadeTo('fast', 0);
    });

    $multi_media_bar = jQuery('#multi-media #media-slides');
    if ($multi_media_bar.length) {
        $multi_media_bar.cycle({
            fx: 'fade',
            timeout: 0,
            speed: 500,
            cleartypeNoBg: true,
            prev: 'a#left-multi-media',
            next: 'a#right-multi-media'
        });
    }

    $multi_media_bar.find('.thumb a').hover(function () {
        jQuery(this).find('img').stop(true, true).fadeTo(400, 0.7).end().find('span').fadeTo(400, 1);
        jQuery(this).parent('.thumb').find('.media-description').stop(true, true).css({ 'display': 'block', 'opacity': 0 }).animate({ opacity: 1, bottom: '53px' }, 400);
    }, function () {
        jQuery(this).find('img').stop(true, true).fadeTo(400, 1).end().find('span').fadeTo(400, 0);
        jQuery(this).parent('.thumb').find('.media-description').stop(true, true).animate({ opacity: 0, bottom: '63px' }, 400, function () {
            jQuery(this).css({ 'display': 'none' });
        });
    });


});


