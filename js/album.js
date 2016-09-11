$(document).ready(function() {
    (function topMenu() {
        var li = $(".topNav li");
        var div = $(".topNav");
        var j = true;
        var i = old = 2;
        activeLi(old);

        function activeLi(i) {
            li.eq(i).css('background-color', '#12b7f5');
        }

        function defaultLi(old) {
            li.eq(old).css('background-color', 'transparent');
        }

        div.mouseenter(function() {
            j = true;
        });
        div.mouseleave(function() {
            j = false;
            defaultLi(old);
            activeLi(2);
            old = 2;
        });

        touch();

        function touch() {
            li.mouseenter(function() {
                if (j) {
                    defaultLi(old);
                    i = $(this).index();
                    activeLi(i);
                    old = i;
                }
            });
        };
    })();



    banenr();

    function banenr() {
        var i = true;
        var b1 = $(".banenr ul li:eq(0)");
        var b2 = $(".banenr ul li:eq(1)");
        setInterval(function() {
            if (i) {
                b1.css({
                    "display": "list-item",
                    'opacity': '0.01'
                });
                b2.css({
                    "display": "block",
                    'opacity': '0.9'
                });
                i = !i;
            } else {
                b1.css({
                    "display": "block",
                    'opacity': '0.9'
                });
                b2.css({
                    "display": "list-item",
                    'opacity': '0.01'
                });
                i = !i;
            }
        }, 3000)
    };

    content();

    function content() {
        var tri = $(".contWrap ul li");
        var res = $(".cover");
        var i;
        tri.hover(function() {
            i = $(this).index();
            res.eq(i).css({
                display: 'inline-block',
                opacity: '0.806'
            });
        }, function() {
            res.eq(i).css({
                display: 'none',
                opacity: '0.40'
            });
        });
    }


    $(".qphone").hover(function() {
        $(this).css({
            "background-position": "0 -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "0 0px",
            "color": "#979797"
        });
    });
    $(".qpc").hover(function() {
        $(this).css({
            "background-position": "-105px -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "-105px 0px",
            "color": "#979797"
        });
    });
    $(".qmac").hover(function() {
        $(this).css({
            "background-position": "-210px -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "-210px 0px",
            "color": "#979797"
        });
    });
    $(".qpad").hover(function() {
        $(this).css({
            "background-position": "-326px -93px",
            "color": "#12b7f5"
        });
    }, function() {
        $(this).css({
            "background-position": "-326px 0px",
            "color": "#979797"
        });
    });



});