/*
        ThemeName       : OLplus+ (OL stands for orderedlist)
        Author&Modified : Yomuse
        JsVersion       : 0.01 (Sep 18 2013)
        License         : MIT licenses.
*/

/*导航滑动效果*/
$(document).ready(function () {
    var dleft = $('.slideclick li.active').offset().left - $('.slideclick').offset().left;
    var dwidth = $('.slideclick li.active').width() + "px";
    $('.navcell').css({"left": dleft + "px", "width": dwidth});
    $('li').hover(function () {
        var left = $(this).offset().left - ($(this).parents('.slideclick').offset().left + 15);
        var width = $(this).width() + "px";
        var sictranslate = "translate(" + left + "px, 0px)";
        $(this).parent('ul').next('div.navcell').css({"width": width, "-webkit-transform": sictranslate, "-moz-transform": sictranslate});
    },function () {
        var left = $(this).siblings('li.active').offset().left - ($(this).parents('.slideclick').offset().left + 15);
        var width = $(this).siblings('li.active').width() + "px";
        var sictranslate = "translate(" + left + "px, 0px)";
        $(this).parent('ul').next('div.navcell').css({"width": width, "-webkit-transform": sictranslate, "-moz-transform": sictranslate});
    }).click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        return true;
    });
});

/*搜索框效果*/
$(function(){

    var input = $('input#s');
    var divInput = $('div.input');
    var width = divInput.width();
    var outerWidth = divInput.parent().width() - (divInput.outerWidth() - width) - 28;
    var submit = $('#searchSubmit');
    var txt = input.val();

    input.bind('focus', function() {
        if(input.val() === txt) {
            input.val('');
        }
        $(this).animate({color: '#000'}, 300); // text color
        $(this).parent().animate({
            width: outerWidth + 'px',
            backgroundColor: '#fff', // background color
            paddingRight: '43px'
        }, 300, function() {
            if(!(input.val() === '' || input.val() === txt)) {
                if(!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeIn(300);
                } else {
                    submit.css({display: 'block'});
                }
            }
        }).addClass('focus');
    }).bind('blur', function() {
            $(this).animate({color: '#b4bdc4'}, 300); // text color
            $(this).parent().animate({
                width: width + 'px',
                backgroundColor: '#e8edf1', // background color
                paddingRight: '15px'
            }, 300, function() {
                if(input.val() === '') {
                    input.val(txt)
                }
            }).removeClass('focus');
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeOut(100);
            } else {
                submit.css({display: 'none'});
            }
        }).keyup(function() {
            if(input.val() === '') {
                if(!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeOut(300);
                } else {
                    submit.css({display: 'none'});
                }
            } else {
                if(!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeIn(300);
                } else {
                    submit.css({display: 'block'});
                }
            }
        });
});
/*名言*/

