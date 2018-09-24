
const fs = require('fs')

//1、文件全部读取后再写入，内存占用多又太久
// fs.readFile('./aaa.mkv', function(err,buffer){
//   fs.writeFile('./bbb.mkv', buffer, function(err){
//     console.log('1复制完成')
//   })
// })


//2、读一点写一点，内存占用依旧较高
var readStream = fs.createReadStream('./aaa.mkv')
var writeStream = fs.createWriteStream('./eee.mkv')

var compressStream = zlib.createDeflate()  //压缩

readStream.pipe(compressStream).pipe(writeStream)

// function pipe(readStream, writeStream){
//   readStream.on('data', data => {
//     writeStream.write(data)
//   })
//   readStream.on('end', () => {
//     console.log('2复制完成')
//     writeStream.end()
//   })
//   return writeStream
// }
