var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看
  if(path === '/index'){
    response.setHeader('Content-Type','text/html; charset="utf-8"')
    response.end(`
      <!DOCTYPE html>
      <h1>Here is index.html</h1>
      <link rel="stylesheet" href="/style">
      <button id="btn">点我</button>
      <script src="main"></script>
  `)
  }else if(path === '/style'){
    response.setHeader('Content-Type','text/css')
    response.end(`
      body{background: #ddd;}
    `)
  }else if(path === '/main'){
    response.setHeader('Content-Type','text/javascript')
    response.end(`
      var b = document.getElementById('btn')
      b.onclick = function(){
        var httpRequest = new XMLHttpRequest() // 获取实例
        httpRequest.open('GET', '/data') // 设置GET 路径

        button.onclick = function(){}
        // 浏览器会在某个时候调用 button.onclick
        httpRequest.onreadystatechange = function(){
        // 浏览器会在某个时候调用 httpRequest.onreadystatechange

          console.log('ready state 变了')
          console.log(httpRequest.readyState)
          if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
              console.log('加载成功')
              console.log(httpRequest.responseText)
              var object = JSON.parse(httpRequest.responseText)
              console.log(object)
              console.log(httpRequest.status)
            }else{
              console.log('失败')
              console.log(httpRequest.status)
            }
          }
        }
        httpRequest.send() //发请求 
      }
    `)
  }else if(path === '/data'){
    response.end('{"name":"frank", "age": 18}') 
  }else{
    response.statusCode = 404
    response.end('Nothing')
  }


  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)