var colorMap = {
    // "black":"\x1b[30m",
    "red":"\x1b[31m",
    "green":"\x1b[32m",
    "yellow":"\x1b[33m",
    // "blue":"\x1b[34m",
    "magenta":"\x1b[35m",
    "cyan":"\x1b[36m",
    "white":"\x1b[37m"
}

//获取仅全部颜色代码的数组集合
var colors = (function(){     
    var result = []
    // for(let i in colorMap){
    //     if(colorMap.hasOwnProperty(i))   //仅自身的，去除原型链上的
    // }
    Object.keys(colorMap).forEach((key) => {
        result.push(colorMap[key])
    })
    return result
})()
// console.log(colors)  [\x1b[30m,\x1b[31m,\x1b[32m,……]

//随机从colors数组中挑选一个颜色
function pickRandomColor(){   
    // [0,8)
    var index = parseInt(Math.random() * colors.length)
    return colors[index]
}

module.exports = {
    colorLog: function(arguments){    
        var color = pickRandomColor()
        console.log(color,arguments)
    }
}

