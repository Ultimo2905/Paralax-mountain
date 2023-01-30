$(document).ready(function() {
    $(window).scroll(function(event) {
        var sc_top = $(this).scrollTop();
        var winWidth = $(this).outerWidth();
        var heightContent = $('.content').outerHeight();
        var heightTopBlock = $('.parallax').outerHeight();
        var p = sc_top / heightContent * 100; // процент прокрутки
        var p_b = sc_top / heightTopBlock * 100; // процент прокрутки верхньої частини
        var opacity_elem = 1 - 1 / 100 * p_b;

        var z_1 = 1 + (winWidth / 10000 * p_b); // зум тумана
        $('.parallax_fog').css('transform', 'scale(' + z_1 + ')');
        $('.parallax_fog').css('opacity', opacity_elem);

        var z_2 = 1 + (winWidth / 800000 * p); // зум єлемента 1
        $('.parallax_montain_1').css('transform', 'scale(' + z_2 + ')');

        var hr = winWidth / 2000 * p_b; // горизонталь єлемента 2
        var z_3 = 1 + (winWidth * 0.000005 * p_b); // зум єлемента 2
        $('.parallax_montain_2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')');

        var hr_2 = winWidth / 1500 * p_b; // горизонталь єлемента 3
        var z_4 = 1 + (winWidth * 0.00002 * p_b); // зум єлемента 3
        $('.parallax_montain_3').css('transform', 'translate3d(' + hr_2 + 'px,0,0) scale(' + z_4 + ')');

    });
});