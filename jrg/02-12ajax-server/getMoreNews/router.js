app.get('/getMore', function(req, res){

    var start = parseInt(req.query.index),
        len = parseInt(req.query.length),
        data = []

    for(var i = start; i < start + len; i++ ){
        data.push('新闻' + i);
    }
    res.send({
        status: 0,   //用于判断服务器给的数据是否正确，不过该项目比较简单未进行设置，现在只是一个花瓶
        data: data
    })
})