
var figlet = require('figlet')

figlet.text('aaa', function(error,data){
  if(error){
    console.log(error)
  }else{
    console.log(data)
  }
})