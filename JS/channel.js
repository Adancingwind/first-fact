function loadArticalList(index){
    $(".slide-content").html("")
    var result = channelData["channelData0"+index]
    console.log(result.titleImg);
    if(result.titleImg){
        $("<img>").addClass("title-img").css({"width":"2.75rem","height":".94rem","margin":"7px 7px 0"}).attr("src",result.titleImg).insertBefore($(".slide-content"))
    }else{
        $(".title-img").fadeOut(0)
        $(".title-img").remove()
    }

    for(let x = 0;x<result.data.length;x++){
        var list = result.data[x].list;
        // console.log(list[5]);
        if(!list||!list.length){
            $(".slide-content").html("没有获取到数据")
        }else{
            $("#slide-content .slide-conmain").html("")
            for(let i = 0;i<list.length;i++){
                var htmlModels = $("#slide-conmain").html()
                htmlModels = htmlModels.replace("articleId",list[i].sysId)
                htmlModels = htmlModels.replace("../image/jd-sprites.png",list[i].img)
                htmlModels = htmlModels.replace("手机",list[i].chan)
                
                $("#slide-content .slide-conmain").append(htmlModels)
            }
            if(result.data[x].titleb == true){
                $("#slide-content .con-tit-r").css("display","block")
            }else{
                // 要写else的原因是因为第一次判断时将display改为了block没改回来
                $("#slide-content .con-tit-r").css("display","none")
            }
            var htmlModel = $("#slide-content").html()
            // console.log(htmlModel);
            htmlModel = htmlModel.replace("热门分类",result.data[x].title)
            
            $(".slide-content").append(htmlModel)
        }
    }
}

$(function (){
    // loadArticalList(0)
    $(".slide-chans").click(function (){
        $(this).addClass("active-nav").siblings().removeClass("active-nav")
        var index = $(this).index()
        // console.log(index);
        $(".slide-content-box").fadeOut(100)
        setTimeout(function (){
            loadArticalList(index)
        },200)     
        $(".slide-content-box").delay(100).fadeIn()

    })
})