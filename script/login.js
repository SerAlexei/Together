$(document).ready(function () {
    $(document).on('click', '#login', function (e) {
        if(!$(this).hasClass('login')){
            $('.login_block_inputs').toggleClass('login-open');
            $('#login').addClass('login');
        }else{
            e.preventDefault();
            e.stopPropagation();
            var fm_in = new FormData();
            var email = $('#login_email').val(),
                password = $('#login_password').val();
            fm_in.append('email', email);
            fm_in.append('password', password);
            console.log(fm_in);
            $.ajax({
                type: 'POST',
                url: 'http://www.mocky.io/v2/5dfcef48310000ee0ed2c281',
                data: fm_in,
                processData: false,
                contentType: false,
                success: function (data) {
                    console.log(data);
                        $.each(data.errors, function (key, value) {

                        })
                }
            });
        }

    });
});