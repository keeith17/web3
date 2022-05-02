(function(){

    var university = {

        init: function(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
            this.modal();
        },

        header: function(){
            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                },
                focusin: function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().slideDown(300);
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                }
            });

            $('#nav>ul').on({
                mouseleave: function(){
                    $('.sub-bg').stop().slideUp(300);
                    $('.sub').stop().slideUp(300);
                    $('.main-btn').removeClass('on');
                }
            });
        },

        section1: function(){
            let cnt=0;
            $('.slide-wrap').on({
                mainSlide: function(){
                    $('.slide-wrap').animate({left:`${-1200*cnt}`},600, function(){
                        cnt>2?cnt=0:cnt;
                        $('.slide-wrap').animate({left:`${-1200*cnt}`},0);
                    });
                },
                nextCount: function(){
                    cnt++;
                    mainSlide();
                },
                autoTimer: function(){
                    setInterval(nextCount,3000);
                }
            });
        },

        section2: function(){
            $('.link-btn').on({
                click: function(){
                    $('#modal').fadeIn(300);
                }
            });
        },

        footer: function(){

        },

        modal: function(){
            $('.close-btn').on({
                click: function(){
                    $('#modal').stop().fadeOut(300);
                }
            });
        }

    }

    university.init();


})(jQuery);




let cnt=0;
function mainSlide(){
    $('.slide-wrap').animate({left:`${-1200*cnt}`},600, function(){
        cnt>2?cnt=0:cnt;
        $('.slide-wrap').animate({left:`${-1200*cnt}`},0);
    });
}

function nextCount(){
    cnt++;
    mainSlide();
}

function autoTimer(){
    setInterval(nextCount,3000);
}

autoTimer();