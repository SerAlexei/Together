jQuery(document).ready(function() {
    $('#login').on("click", function () {
        $('.login_block_inputs').toggleClass('login-open');
        $('#login').addClass('login');
    });

    $("form").each(function () {
        var obj = $(this);
        $(obj).find(".step");
        $(obj).find(".step").each(function () {
            $(obj).find(".nav").append("<span class='nav"+$(this).index()+"' rel='"+$(this).index()+"'></span>");
            $(this).addClass("step"+$(this).index());
        });
        let index = $("form .steps_block .active").index();
        $('.nav').find("span").first().addClass("on");
        $('#prev_step').on('click', function () {

            if(index === 0){
                $('#prev').prop('disabled', true);
            }else{
                $('#next').prop('disabled', false);
                if(index !== 0){
                    $(".nav"+index).removeClass('on');
                    $('#submit').removeClass('last_step');
                    $('#next_step').addClass('last_step');
                }
                index--;
                $("form .steps_block .active").removeClass('active');
                $("form .steps_block .step"+index).addClass('active');
            }
        });
        $('#next_step').on('click', function () {
                $('#prev').prop('disabled', false);
                index++;
                $("form .steps_block .active").removeClass('active');
                $("form .steps_block .step"+index).addClass('active');
                $(".nav"+index).addClass('on');
            if(index === $("form .steps_block .step").last().index()){
                $('#submit').addClass('last_step');
                $('#next_step').removeClass('last_step');
            }
        });
    });

    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
        if($('.triangle').hasClass('rotate') === false){
            $('.triangle').addClass('rotate')
        }
        else {
            $('.triangle').removeClass('rotate')
        }
    });

    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).text());
    });

});


