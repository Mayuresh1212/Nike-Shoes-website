$(window).scroll(function(){
    var scrl = $(window).scrollTop();
    if(scrl < 60)
    {
        $('.header').removeClass('.fixedbar');
    }
    else
    {
        $('.header').addClass('.fixedbar');
    }
});