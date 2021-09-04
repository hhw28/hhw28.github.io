//假设域名是localhost, 端口是8080
//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html

/**
 * 当 http://localhost:8080/user 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取get请求的参数对象 
 * 通过req.send发送响应
 */
app.get('/user',function(req,res){
	var username = req.query.username
	var friends
	if(username == 'ruoyu'){
		friends = ['小明','小刚']
	}else{
		friends = ['nobody']
	}
	res.render('user.ejs',{
		friends:friends
	})
})

/**
 * 当 http://localhost:8080/user 的POST请求到来时被下面匹配到进行处理
 * 通过req.body获取post请求的参数对象 
 * 通过req.send发送响应
 */
app.post('/user',function(req,res){
	var username = req.body.username
	var friends
	if(username == 'ruoyu'){
		friends = ['小明','小刚']
	}else{
		friends = ['nobody']
	}
	res.render('user.ejs',{
		friends:friends
	})
})




