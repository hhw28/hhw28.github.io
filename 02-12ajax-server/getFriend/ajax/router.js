
/**
 * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取请求的参数对象 
 * 通过 req.send发送响应
 */
app.get('/getFriends', function(req, res) {
	var username = req.query.username // get请求通过req.query获取请求参数
	var friends
  
  //根据请求参数mock数据
  switch (username){
  	case 'ruoyu':
  		friends = ['小明ssss', '小刚', '<script>alert(1)</script>']
  		break
  	case 'hunger':
  		friends = ['小谷sf1111', '小花']
  		break;
  	default:
  		friends = ['没有朋友']
  }
  res.send(friends)
})

