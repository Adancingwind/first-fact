var goodsData = {}
goodsData.goods1 ={
    data:
        {
            "describe":"生日礼物女生520七夕情人节礼物送女友女朋友老婆媳妇妈妈特别浪漫表白结婚创意实用高档惊喜纪念日礼品",
            "price":4378, 
            "sysId":4,
            "coverImg1":"//m.360buyimg.com/mobilecms/s750x750_jfs/t1/64647/12/1211/116910/5cf76df9E467f5472/4d4168883f8db994.jpg!q80.dpg.webp",
            "coverImg2":"//m.360buyimg.com/mobilecms/s750x750_jfs/t1/64647/12/1211/116910/5cf76df9E467f5472/4d4168883f8db994.jpg!q80.dpg.webp",
            "coverImg3":"//m.360buyimg.com/mobilecms/s750x750_jfs/t1/64647/12/1211/116910/5cf76df9E467f5472/4d4168883f8db994.jpg!q80.dpg.webp",
            "coverImg4":"//m.360buyimg.com/mobilecms/s750x750_jfs/t1/64647/12/1211/116910/5cf76df9E467f5472/4d4168883f8db994.jpg!q80.dpg.webp",
            "coverImg5":"//m.360buyimg.com/mobilecms/s750x750_jfs/t1/64647/12/1211/116910/5cf76df9E467f5472/4d4168883f8db994.jpg!q80.dpg.webp",
    
        }
    
}
goodsData.goods2 ={
    data:
        {
            "describe":"德芙巧克力礼盒生日礼物七夕巧克力情人节礼物送女生表白情人节巧克力糖果礼盒零食",
            "price":79, 
            "sysId":4,
            "coverImg":"../images/article_image04.jpg"
        }
    
}


























window.onload = function (){
    var mySwiper = new Swiper('.pic-block', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    })
    
}

$(function (){
    $(".func-btn1").click(function (){
        window.history.go(-1)
    })


    // 页面的渲染
    function getUrlParams(name){
        // window.location.search:获取地址栏中从？开始的信息
        var str = window.location.search.substr(1)//获取除？外的信息
        var arr = str.split("&");
        console.log(arr);
        for(var i = 0;i<arr.length;i++){
            var newArr = arr[i].split("=");
            if(newArr[0] == name){
                return newArr[1]
            }else{
                return ;
            }
        }
        
    }
    var result = getUrlParams("articleId")//xiaoniaoNews3
    console.log(result);
    var data = goodsData[result].data
    console.log(data);
    $(".goods-describe-block>p").html(data.describe)
    // $(".content>h2").html(data.typeEntitle)
    // $(".content>h3").html(data.title+"<span></span>")
    // $(".content .ctime").html(data.updateAt)
    // $(".content .author").html(data.updateByFullName)
    // $(".cover").attr("src",data.coverImg)
    $(".price em").html(data.price)
})