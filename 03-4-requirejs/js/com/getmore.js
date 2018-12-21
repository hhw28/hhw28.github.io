
define(function(require){

    var $ = require('jquery')
    var waterfall = require('com/waterfall')

    var getMore = (function(){
        function _getMore($ct){
            this.$ct = $ct
            this.bind()
            this.dosomething()
        }
        _getMore.prototype.bind = function(){
            var _this = this
            this.$ct.on('click',function(){
                _this.dosomething()
            })
        }
        _getMore.prototype.dosomething = function(){
            var curPage = 1
            var perPageCount = 9
            var _this = this
            // jsonp 接口参数：http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4
            $.ajax({
                url:'http://platform.sina.com.cn/slide/album_tech',
                dataType:'jsonp',
                jsonp:'jsoncallback',
                data:{
                    app_key:'1271687855',
                    num:perPageCount,
                    page:curPage
                },
                success:function(ret){
                    if(ret.status.code === '0'){
                        _this.place(ret.data)
                        curPage++
                    }else{
                        console.log('数据错误')
                    }
                },
                error:function(){
                    console.log('错误')
                },
                complete:function(){
                    console.log('请求发送完成')
                }
            })			
        }
        _getMore.prototype.place = function(nodeList){
            var _this = this
            $.each(nodeList,function(index,item){
                var $node = _this.renderData(item)
                $node.find('img').load(function(){   //等图片下载成功之后再添加到html中显示，避免导致高度叠加的情况
                    $('#pic-ct').append($node)
                    waterfall($node)
                })
            })
        }
        _getMore.prototype.renderData = function(items){
            var html = ''
                html += '<li class="item"><a href="'+ items.url +'">'
                html += '<img src="'+items.img_url+'" alt="">'
                html += '<div><h5>2017.01.18</h5><h4>新华网</h4>'
                html += '<h3 class="title">'+ items.short_name +'</h3>'
                html += '<p class="intro">'+  items.short_intro +'</p>'
                html += '<p class="details">了解详情 》</p>'
                html += '</div></a></li>'				
            return  $(html)
        }
        
        return{
            init:function($ct){
                new _getMore($ct)
            }
        }
    })()

    return getMore
})




