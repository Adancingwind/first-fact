var purchaseData = {};
purchaseData.purchaseData00 = {
	"success": "ok",
	"data": {
		"pageStart": 0,
		"pageSize": 6,
		"count": 15,
		"list": [
			{
			"describe": "生日礼物女生七夕情人节礼物送女友女朋友老婆妈妈媳妇爱人结婚纪念日有意义的浪漫表白创意实用高档礼品 天鹅半镯金",
			"price": "4528",
			"sysId": 1,
			"coverImg": "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/60172/2/6599/71141/5d4d1c52E8d541248/bd14f17f32c855d7.jpg!q70.dpg.webp",
		}, {
			"describe": "四叶草紫水晶手链送女朋友老婆生日礼物女媳妇高档实用浪漫异地恋结婚纪念日礼物七夕情人节礼物送女友创意 金色豪华包装14粒四叶草紫水晶手链",
			"price": "399",
			"sysId": 2,
			"coverImg": "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/31538/7/10350/165151/5cad6bacEde5c1e8b/b4eb61b47c3a3bfa.jpg!q70.dpg.webp",
		}, {
			"describe": "爱之选 送女生礼物招财足金黄金转运珠貔貅手链女款玛瑙粉晶石榴石本命年生日礼物 石榴石貔貅手串",
			"price": "398",
			"sysId": 3,
			"coverImg": "//img13.360buyimg.com/mobilecms/s372x372_jfs/t26674/291/2147081112/177014/511558db/5bf7dfc1Nf4cee2fa.jpg!q70.dpg.webp",
		}, {
			"describe": "结婚一十周年纪念日礼物送老婆生日礼物媳妇爱人女生七夕情人节礼物送女友项链浪漫定制惊喜实用女朋友的礼物 单个925银手镯+天鹅绒盒+送玫瑰花+顺丰航空件",
			"price": "168",
			"sysId": 4,
			"coverImg": "//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/40913/25/11128/107722/5d494f53Ed676684a/f063e0d5194cd22a.jpg!q70.dpg.webp",
		}]
	}
}






var loadStart = 0;
    loadArticalList()

    function loadArticalList(){
        if(loadStart == 0){
            $(".model3 .model-main").html("")
        }
        var result = purchaseData["purchaseData0"+loadStart]
        var list = result.data.list

        if(!list||!list.length){
            $(".model3 .model-main").html("没有获取到数据")
        }else{
            for(var i = 0;i<list.length;i++){
        // console.log($("#model-main").html());

                var htmlModel = $("#model-main").html()
                
                htmlModel = htmlModel.replace("articleId",list[i].sysId)
                htmlModel = htmlModel.replace("../image/016033c7ef3e0c6c.png",list[i].coverImg)
                htmlModel = htmlModel.replace("${price}",list[i].price)
                htmlModel = htmlModel.replace("${describe}",list[i].describe)
                
                $(".model3 .model-main").append(htmlModel)
                
            }
        }
        loadStart++;

        
    }






