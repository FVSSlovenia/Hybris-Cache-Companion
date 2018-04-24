// ==UserScript==
// @name         Cache Companion
// @version      0.15
// @description  Improvements for Content Managing on Hybris
// @author       FVS.Slovenia 69
// @match        https://www.enterurlhere.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    $(document).ready( function() {

        //Amplience http/https issue fix 
        /*         $("img[src*='media.x']").each(function() {
               $(this).attr("src", $(this).attr("src").replace("https://", "//"));
    $(this).attr("src", $(this).attr("src").replace("//media", "http://media"));
});
$("div[style*='media.x']").each(function() {
    $(this).attr("style", $(this).attr("style").replace("https://", "//"));
    $(this).attr("style", $(this).attr("style").replace("//media", "http://media"));
});*/
        
   // Mixed content checker
        var MixedAltText = "";
$(document).ready(function MixedContent() {
    var MixedOn = 0; //enable(1) or disable (0) the alert
    var MixedAltOn = 1; //enable(1) or disable (0) the layer
    var mixednum = 0; //number of external links in header/footer here
    
    /* Domain template 
    For the first domain:
    if(window.location.href.indexOf("example.com") > -1) {
    mixednum = 1;
    }
    Second to infinity:
    else if(window.location.href.indexOf(" -Domain name- ") > -1) {
     mixednum = -Number of header/footer errors here- ;
    }
    */
    
    var Mixedlink= $("a[href*='http://']").length + $("area[href*='http://']").length;
    var Mixedbg= $("div[style*='http://']").length;
    var Mixedimg= $("img[src*='http://']").length;
    
    //MixedOn Alert
    if ( MixedOn == 1 && (Mixedlink+Mixedbg+Mixedimg>mixednum)){
    alert("On this page, there are: " + Mixedlink + " unsafe links, " + Mixedbg + " unsafe background images and " + Mixedimg + " unsafe images.");
}
    //MixedAltOn Layer
       if ( MixedAltOn == 1 && (Mixedlink+Mixedbg+Mixedimg>mixednum)){
    var MixedAltText = "<style> #MixedContentDisplay{ right: 0;  position: absolute;    margin: 20px;  margin-top:50px;  padding: 10px;    border: red 1px solid;    background: white;    line-height: 20px;    box-shadow: 0px 5px 5px red;  -moz-box-shadow: 0px 5px 5px red; -webkit-box-shadow: 0px 5px 5px red;  font-size: 15px;    z-index: 120;}</style><div id='MixedContentDisplay'>On this page, there are:<br>" + Mixedlink + " unsafe links<br>" + Mixedbg + " unsafe background images<br>" + Mixedimg + " unsafe images.</div>";
     
           $( "body" ).append(MixedAltText);//insert header id: ( "#HeaderID" ).append(MixedAltText);
}
    //Highlighters
                 $("a[href*='http://']").css({

                             "box-shadow": "0px 5px 5px red",
                            '-moz-box-shadow': "0px 5px 5px red",
                            '-webkit-box-shadow': "0px 5px 5px red",
                     "color": "red !important",
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
});});
       
        //remove that annoying false email alert that kepps pupping up next to cache button
        $('.headerFlyoutError').remove();

        // Rename or localise the inscription on the button
        $('.cacheinit').text("Delete Current Site's Cache");

        //sticky DeleteCache button function
        $('head').after('<div id="scroller-anchor" style="margin-top: -1px;"></div><style>#x-bar a {  margin-left: 15px;} #x-bar a.cacheinit.loading::before {top: 10px !important;}</style>');
        function moveScroller() {
            var $anchor = $("#scroller-anchor");
            var $scroller = $('#x-bar');

            var move = function() {
                var st = $(window).scrollTop();
                var ot = $anchor.offset().top;
//following if-line is for testing possible older browser's malfunction only
                if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

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
