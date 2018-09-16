
var http = require('http')

http.createServer(function(request, response){
  console.log('is connect')
  response.writeHead(200, {'Content-Type': 'text/plain'})

  request.on('data', function(chunk){
    response.write(chunk.toString().toUpperCase())
  })
  request.on('end', function(){
    response.end()
  })
}).listen(8000)




// var request = http.request({
//   hostname:'localhost',
//   port:8000,
//   method:'POST',
// }, function(response){
//   response.on('data', function(chunk){
//     process.stdout.write(chunk.toString())
//   })
// })
// request.end('Hello server')
