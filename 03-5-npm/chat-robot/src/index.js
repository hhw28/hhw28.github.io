// console.log('\x1b[31m','hello')  //把颜色代码放在最前面，就可以有颜色了哦
var colors = require('./color'),
    readline = require('readline'),  //原生模块
    http  = require('http')

var API_KEY = '58f9e1875f3144799c68c9ff1f835b64'
var RESPONSE_TYPE = {
    TEXT:100000,
    LINK:200000,
    NEWS:302000
}

function initChat(){
    var welcomeMsg = '请开始你的表演'
    // for(var i=0; i<welcomeMsg.length; i++){
    //     colors.colorLog('---------'+welcomeMsg[i]+'---------')
    // }
    Array.prototype.forEach.call(welcomeMsg,(word)=>{    //字符串没有forEach方法，需要call
        colors.colorLog('---------'+word+'---------')
    })

    var rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    var name = ''

    rl.question('> 阁下尊姓大名:',(answer)=>{
            // console.log(`大名：${answer}`)
            name = answer
            colors.colorLog(`${name}你好啊~`)
            chat()
    })
    function chat(){
        rl.question('> 快和我聊天吧：',(query)=>{
            if(!query){
                colors.colorLog('再见，下次再聊！')
                process.exit(0)  //退出进程
            }
            
            var req = http.request({
                hostname:'www.tuling123.com',
                path:'/openapi/api',
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            },(res)=>{    //回调
                var data = ''
                res.on('data',(chunk)=>{
                    data += chunk
                })
                res.on('end',()=>{
                    colors.colorLog(handleResponse(data))
                    chat()
                })
            })
            req.write(JSON.stringify({
                key:API_KEY,
                info:query,
                userid:name
            }))
            req.end()
        })
    }
    function handleResponse(data){
        var res = JSON.parse(data)
        switch(res.code){
            case RESPONSE_TYPE.TEXT:
                return res.text;
            case RESPONSE_TYPE.LINK:
                return `${res.text}:${res.url}`
            case RESPONSE_TYPE.NEWS:
                var listInfo = '';
                (res.list || []).forEach((it) => {
                    listInfo += `\n文章: ${it.article}\n来源: ${it.source}\n链接: ${it.detailurl}`
                })
                return `${res.text}\n${listInfo}`
            default:
                return res.text
        }
    }

}

module.exports  = initChat

//bin 修改之后需要 npm link 才能调用