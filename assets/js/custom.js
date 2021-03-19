$(document).ready(function() {
    $('.progressWrapper progress').each(function() {
        var prgsVal = $(this).data('value');
        var maxN = $(this).attr('max');
        var pop = prgsVal / maxN * 100

        $(this).prev().css('left', pop + '%').text(prgsVal);
        $(this).val(prgsVal);
    });
    var typed = new Typed('#typed', {
      strings: ['', 'Your technology partner for innovative and impactful digital solutions.'],
      typeSpeed:40
    });
});
