$(document).ready(function () {
    $(document).on('click', '#submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var fm_in = new FormData();
            var profession = $('input[name*="profession"]').val(),
                age = $('input[name*="age"]').val(),
                fromm = $('input[name*="from"]').val(),
                email = $('input[name*="email"]').val(),
                password = $('input[name*="password"]').val();
            fm_in.append('email', profession);
            fm_in.append('age', age);
            fm_in.append('from', fromm);
            fm_in.append('email', email);
            fm_in.append('password', password);
            $.ajax({
                type: 'POST',
                url: 'http://www.mocky.io/v2/5dfcef48310000ee0ed2c281',
                data: fm_in,
                processData: false,
                contentType: false,
                success: function (data) {
                    $.each(data.errors, function (key, value) {
                        $('.error-'+value.name).text(value.message).removeClass('error_none');
                    })
                }
            });
    });
});