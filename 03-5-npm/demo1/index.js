
var a = 1
console.log(1)  //1

var sayHello = require('./a').sayHello
sayHello(' wh')  //hello wh

var marked = require('marked')  //npm会自动从node_modules找，所以只需写模块名
var str = marked('# hello')  
console.log(str)    //<h1>hello</h1>,把markdown格式转化为html