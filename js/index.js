$(document).scroll(()=>{
    if($(document).width() < 1024)
    return false;

    if($(document).scrollTop() >$('.full-page').height() / 2)
        $("header").addClass("fixed");
    else
    $("header").removeClass("fixed");
});

$(".up-btn").on("click", () =>{
    $("html,body").animate({
        scrollTop: 0
    }, 'slow')
})

$("#show-menu").on("click",() => {
    $("#hidden-menu").animate({
        "right":0, "opacity": "0.93"
    },500);
})

$("#hidden-menu .close").on("click",() => {
    $("#hidden-menu").animate({
        "right":"-300px", "opacity": "1"
    },200);
});


$(document).ready(()=>{
    $("#slider").slick({
        dots:false,
        prevArrow: '<div class ="arrow-prev"><i class="fas fa-arrow-left"></i></div>',
        nextArrow: '<div class ="arrow-next"><i class="fas fa-arrow-right"></i></div>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:2
    });
});