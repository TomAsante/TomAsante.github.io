jQuery(function($){
    var date = new Date().getFullYear();

    $('.navbar-bottom span.year').html(date);

    $('.social-icons a').hover(function () {
        $('g').css('fill', '#EF7344');
    }, function() {
        $('g').css('fill', '#000000');
    });

    $('#Glide').glide({
        type: 'carousel',
        autoplay: 5500,
        hoverpause: false
    });

 jQuery('#gallery').unitegallery({
     gallery_theme: 'tiles'
 });

});