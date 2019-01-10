// ==UserScript==
// @name         Cache Companion - SEO Edition
// @version      0.16a
// @description  Improvements for Cache button on Hybris
// @author       FVS.Slovenia 69
// @match        https://www.goog.le/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';



    $(document).ready( function() {
                      $("i.inline-edit::after").css({
           "display": "none !important"
});
        //metadata displayer
        var metatitle = document.title;
        var metadesc = $('meta[name=description]').attr("content");
        $('<div id="metaadd"><p><b>'+metatitle+'</b><br>'+metadesc+'</p></div>').insertAfter('head');


//img alt display

$("main img").each(function() {
    var imageCaption = $(this).attr("alt");
    if (imageCaption != '' && imageCaption!=undefined) {
        var imgWidth = $(this).width();
        $("<div class='img-alttext'><p>" + imageCaption +
            "</p></div>").css({
            "margin-top": "-80px",
            "max-width": imgWidth + "px",
            "height": "80px",
            "position": "relative",
            "display": "table",
"float": "right"
        }).insertAfter(this);
    }
    else if (imageCaption==undefined){
    var imgWidthU = $(this).width();
        $("<div class='img-alttext'><p class='undefined'>" + imageCaption +
            "</p></div>").css({
            "max-width": imgWidthU + "px",
        }).insertAfter(this);
    }
});


        var MixedAltText = "";
$(document).ready(function MixedContent() {
    var MixedOn = 0; //enable(1) or disable (0) the popup
    var MixedAltOn = 1; //enable(1) or disable (0) the cache attachment
    var mixednum = 0;
    /* Domain template
    else if(window.location.href.indexOf(" -Domain name- ") > -1) {
     mixednum = -Number of header/footer errors here- ;
    }*/
    var Mixedlink= $("a[href*='http://']").length + $("area[href*='http://']").length;
    var Mixedbg= $("div[style*='http://']").length;
    var Mixedimg= $("img[src*='http://']").length;
    var NoAlts= ($("img[alt='']").length);
    if ( MixedOn == 1 && (Mixedlink+Mixedbg+Mixedimg+NoAlts>mixednum)){
    alert("On this page, there are: " + NoAlts + " images without Alts, " + Mixedlink + " unsafe links, " + Mixedbg + " unsafe background images and " + Mixedimg + " unsafe images.");
}
       if ( MixedAltOn == 1 && (Mixedlink+Mixedbg+Mixedimg+NoAlts>mixednum)){
    var MixedAltText = "<style> #MixedContentDisplay{ right: 0;  position: absolute;    margin: 20px;  margin-top:50px;  padding: 10px;    border: red 1px solid;    background: white;    line-height: 20px;    box-shadow: 0px 5px 5px red;  -moz-box-shadow: 0px 5px 5px red; -webkit-box-shadow: 0px 5px 5px red;  font-size: 15px;    z-index: 120;}</style><div id='MixedContentDisplay'>On this page, there are:<br>" + NoAlts + " images without Alts,<br>" + Mixedlink + " unsafe links<br>" + Mixedbg + " unsafe background images<br>" + Mixedimg + " unsafe images.</div>";
           $( "#topNavigation" ).append(MixedAltText);
}
                 $("a[href*='http://']").css({

                             "box-shadow": "0px 5px 5px red",
                            '-moz-box-shadow': "0px 5px 5px red",
                            '-webkit-box-shadow': "0px 5px 5px red",
                     "color": "red !important",
           });
      $("img[alt='']").css({
           " -webkit-filter": "grayscale(100%)",
            "filter": "grayscale(100%)",
                             "box-shadow": "0px 5px 5px #d4d4d4",
                            '-moz-box-shadow': "0px 5px 5px #d4d4d4",
                            '-webkit-box-shadow': "0px 5px 5px #d4d4d4",
});

      $("div[style*='http://']").css({
           " -webkit-filter": "grayscale(100%)",
            "filter": "grayscale(100%)",
                             "box-shadow": "0px 5px 5px #d4d4d4",
                            '-moz-box-shadow': "0px 5px 5px #d4d4d4",
                            '-webkit-box-shadow': "0px 5px 5px #d4d4d4",
});

              $("img[src*='http://']").css({
           " -webkit-filter": "grayscale(100%)",
            "filter": "grayscale(100%)",
                             "box-shadow": "0px 5px 5px #d4d4d4",
                            '-moz-box-shadow': "0px 5px 5px #d4d4d4",
                            '-webkit-box-shadow': "0px 5px 5px #d4d4d4",
});

});

        //remove that annoying false email alert that kepps pupping up next to cache button
        $('.headerFlyoutError').remove();

        // Rename or localise the inscription on the button
        $('.cacheinit').text("Delete Cache");

        //sticky DeleteCache button function & other css
        $('head').after('<div id="scroller-anchor"></div><style>#metaadd{max-width: 250px;background-color: coral;margin-top: 41px;position: absolute;z-index: 9999;padding: 5px;}.img-alttext{height: 80px; position: relative; display: table; float: right;margin-top: -80px;} .img-alttext p{background-color: #fff;text-align: right;border: 1px solid black;padding: 0 10px;} .img-alttext .undefined{background-color: #fff426;border: 1px solid red;} #x-bar a {  margin-left: 15px;} #x-bar a.cacheinit.loading::before {top: 10px !important;}</style>');
        function moveScroller() {
            var $anchor = $("#scroller-anchor");
            var $scroller = $('#x-bar');

            var move = function() {
                var st = $(window).scrollTop();
                var ot = $anchor.offset().top;

                if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

                    $scroller.css({

                    });
                }


                else {

                    if(st => ot) {
                        $scroller.css({
                            position: "fixed",
                            top: "0",
                            "box-shadow": "0px 5px 5px #d4d4d4",
                            '-moz-box-shadow': "0px 5px 5px #d4d4d4",
                            '-webkit-box-shadow': "0px 5px 5px #d4d4d4",
                            padding: "10px"
                        });
                    }

                    else {
                        if(st < ot) {
                            $scroller.css({
                                position: "relative",
                                top: "",
                                "box-shadow": "",
                                '-moz-box-shadow': "",
                                '-webkit-box-shadow': "",
                                padding: "10px"
                            });
                        }
                    }}
            };
            $(window).scroll(move);
            move();
        }

        $(function() {
            moveScroller();
        });
    });

})();
