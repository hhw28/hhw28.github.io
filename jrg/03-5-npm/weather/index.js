#! /usr/bin/env node

var axios = require('axios') 

var data = {}

if(process.argv[2]){   //process.argv的第三个参数是我们输入的文字
    data.params = {
        city:process.argv[2]
    }
}

axios.get('http://api.jirengu.com/weather.php',data)   //then 得到响应，catch得到报错
  .then(function (response) {  

    var weather = response.data.results[0].weather_data[0]
    console.log(weather.date)  //日期
    console.log(weather.temperature)  //温度
    console.log(weather.weather + ',' + weather.wind) //天气和风向
    console.log('PM25：'+ response.data.results[0].pm25) 

  })
  .catch(function (error) {
    console.log(error);
  });