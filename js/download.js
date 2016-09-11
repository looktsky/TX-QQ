/* 
* @Author: anchen
* @Date:   2016-06-02 13:24:03
* @Last Modified by:   anchen
* @Last Modified time: 2016-06-23 12:37:35
*/
$(document).ready(function() {
	(function topMenu(){
        var li = $(".topNav li");
        var div = $(".topNav");
        var j = true;
        var i = old = 1;
        activeLi(old);

        function activeLi(i){
            li.eq(i).css('background-color','#12b7f5');
        }
        function defaultLi(old){
            li.eq(old).css('background-color','transparent');
        }

        div.mouseenter(function() {
            j = true;
        });
        div.mouseleave(function() {
            j = false;
            defaultLi(old);
            activeLi(1);
            old = 1;
        });
        
        touch();
        function touch(){
            li.mouseenter(function(){
                if(j){
                    defaultLi(old);
                    i = $(this).index();
                    activeLi(i);
                    old = i;
                }
            });
        };
    })();

    $(".qphone").hover(function() {
        $(this).css({"background-position":"0 -93px","color":"#12b7f5"});
    }, function() {
        $(this).css({"background-position":"0 0px","color":"#979797"});
    });
    $(".qpc").hover(function() {
        $(this).css({"background-position":"-105px -93px","color":"#12b7f5"});
    }, function() {
        $(this).css({"background-position":"-105px 0px","color":"#979797"});
    });
    $(".qmac").hover(function() {
        $(this).css({"background-position":"-210px -93px","color":"#12b7f5"});
    }, function() {
        $(this).css({"background-position":"-210px 0px","color":"#979797"});
    });
    $(".qpad").hover(function() { 
        $(this).css({"background-position":"-326px -93px","color":"#12b7f5"});
    }, function() {
        $(this).css({"background-position":"-326px 0px","color":"#979797"});
    });
});