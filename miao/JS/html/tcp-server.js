
var net = require('net')

var server = net.createServer()

server.on('connection',conn => {
  //当连接的时候打印出，远程地址，远程端口，https://nodejs.org/api/net.html
  console.log('a connection established:'+ conn.remoteAddress, conn.remotePort)

  conn.on('data', data => {
    console.log(conn.remoteAddress, data.toString())
    conn.write(data.toString().toUpperCase())
  })
  conn.on('error',()=>1)
})

server.listen(123, ()=>{
  console.log('server listening on port', 123)
})




// node tcp-server.js

var conn = net.connect(123,'192.168.31.9')

conn.on('connect', () => {
  conn.write('hello world')
  conn.on('data', data => {
    console.log(data.toString())
  })
  conn.close()
})
