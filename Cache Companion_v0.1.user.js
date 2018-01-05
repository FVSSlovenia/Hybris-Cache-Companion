// ==UserScript==
// @name         Cache Companion
// @version      0.1
// @description  Improvements for Cache button on Hybris
// @author       FVS.Slovenia 69
// @match        https://www.enterurlhere.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    $(document).ready( function() {

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
