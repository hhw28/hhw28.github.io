

var net = require('net')
var fs = require('fs')

var server = net.createServer()
const port = 8080

server.on('connection',conn => {
  conn.on('data', data=>{

    var d = data.toString()
    var lines = d.split('\r\n')
    var firstLine = lines.shift()
    var [method, path] = firstLine.split(' ')

    try{
      var fileContent = fs.readFileSync('.' + path)
    }catch(e){
      fileContent = 'error'
    }


    conn.write(`HTTP/1.1 200 OK\r\n`)
    // conn.write(`Content-Type: text/html\r\n`)
    conn.write(`\r\n`)
    conn.write(fileContent)
    conn.end()
  })
})

server.listen(port,()=>{
  console.log('server listening on port', port)
})