
const net = require('net')
const fs = require('fs')

//server
// const server = net.createServer(conn => {
//   console.log('someone connect')
//   fs.createReadStream('./a.mkv').pipe(conn)
// })
// server.listen(10010, () => {
//   console.log('connect 10010')
// })


//client
net.connect(10010,'192.168.31.196').pipe(fs.createWriteStream('a'))






