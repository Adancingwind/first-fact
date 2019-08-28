// 头部轮播图部分
window.onload = function () {
    var mySwiper = new Swiper('.banner', {
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay:true,


        // mode: 'horizontal',
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true //修改swiper的父元素时，自动初始化swiper
    })
    // console.log(document.getElementsByClassName("swiper-slide").length);
    // console.log(mySwiper);



    var mySwiper = new Swiper('.funcs', {
        pagination: {
            el: '.swiper-pagination-funcs',
            clickable: true
        },
    
    })
}

$(function (){
    // 顶部框部分
    $(document).scroll(function (ev){
        // console.log($(this).scrollTop());
        if($(this).scrollTop()>50){
            $(".header").css("background","#e43130")
        }else{
            $(".header").css("background","transparent")
        }
    })

    // 推荐块跳转
    $(".block3").click(function (){
        // console.log($(this).attr("articleId"));
        var index = $(this).attr("articleId")
        window.open("goods.html?articleId=goods"+index,"_self")
    })
})



