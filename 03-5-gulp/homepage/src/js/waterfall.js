//瀑布流

  
var itemArr = [],
    $nodeWidth = $('.item').outerWidth(true),
    colLength = parseInt($('#pic-ct').width()/$nodeWidth)  //获取每行存放个数
for(var i=0; i<colLength; i++){
    itemArr.push(0)
}

function _waterfall($nodes){

    $nodes.each(function(){
        var idx = 0
        var minSumHeight = itemArr[0]

        for(var i=0; i<itemArr.length; i++){

            if(itemArr[i] < minSumHeight){
                idx = i
                minSumHeight = itemArr[i]
            }
        }
        $(this).css({
            top:minSumHeight,   //该排在高度最小值的下面
            left:$(this).outerWidth(true)*idx,  //true包含边框  //确定放在哪列
            opacity:1
        })
        itemArr[idx] += $(this).outerHeight(true)  //排完后最小值 值增加了，把增加的值赋值
        $nodes.parent().height(Math.max.apply(null,itemArr))  
    })

}

module.exports = waterfall