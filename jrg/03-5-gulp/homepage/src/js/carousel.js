   
var Carousel = (function(){

    function _Carousel($ct){
        this.$ct = $ct
        this.init()
        this.bind()
    }
    _Carousel.prototype.init = function(){
        var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
            $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
            $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
            $bullet = this.$bullet = this.$ct.find('.bullet');
        
        var $lastImg = $imgCt.find('li').last()
        var $firstImg = this.$firstImg = $imgCt.find('li').first();
        this.pageIndex = 0
        this.$imgLength = $imgCt.children().length
        this.isAnimate = false  //判断是否重复点击，若已经在动画中则点击无效

        this.imgWidth = $firstImg.width()         

        $imgCt.prepend($lastImg.clone())
        $imgCt.append($firstImg.clone())

        $imgCt.width($firstImg.width() * $imgCt.children().length)   //图片容器宽度等于图片的宽度*图片个数
        $imgCt.css('left','-1920px')
    }
    _Carousel.prototype.bind = function(){
        var _this = this

        this.$preBtn.on('click',function(e){
            e.preventDefault()
            _this.playpre(1)
        })
        this.$nextBtn.on('click',function(e){
            e.preventDefault()
            _this.playNext(1)
        })

        this.$bullet.on('click','li',function(){

            var bulletIndex = $(this).index()  //获取目前点击着下标

            if(_this.pageIndex < bulletIndex){
                _this.playNext(bulletIndex - _this.pageIndex)
            }
            if(_this.pageIndex > bulletIndex){
                _this.playpre(_this.pageIndex - bulletIndex)
            }
        })                    
    }
    _Carousel.prototype.playpre = function(n){
        var _this = this

        if(this.isAnimate){
            return
        }
        this.isAnimate = true

        this.$imgCt.animate({
            left:'+='+this.imgWidth*n,
        },function(){
            _this.pageIndex -= n
            if(_this.pageIndex == -1){  
                _this.$imgCt.css({'left':-(_this.$imgLength*_this.$firstImg.width())})   
                _this.pageIndex = _this.$imgLength-1
            }
            _this.isAnimate = false
            _this.setBullet()
        })
    }
    _Carousel.prototype.playNext = function(n){
        var _this = this

        if(this.isAnimate){
            return
        }
        this.isAnimate = true

        this.$imgCt.animate({
            left:'-='+this.imgWidth*n
        },function(){
            _this.pageIndex += n
            if(_this.pageIndex === _this.$imgLength){  //当已经到最后一张图后
                _this.$imgCt.css({'left':'-1920px'})   //退回到原来的位置
                _this.pageIndex = 0
            }
            _this.isAnimate = false
            _this.setBullet()
        })
    }
    _Carousel.prototype.setBullet = function(){
        this.$bullet.children()
                .removeClass('active')
                .eq(this.pageIndex)
                .addClass('active')
    }
    

    return {
        init: function($ct){    //传输的可能是很多的，也可能是一个,所以遍历每一项
            $ct.each(function(index,node){
                new _Carousel($(node))
            })
        }
    }
})()

module.exports = Carousel


