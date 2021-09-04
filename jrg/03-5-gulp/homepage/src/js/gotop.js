

var goTop = (function(){
    
    function _goTop(){
        this.$ct = $('body')
        this.target = $('<button class="gotop">回到顶部</button>')
        this.bind()
        this.createNode()

    }
    _goTop.prototype.bind = function(){
        var $target  = this.target
        $(window).on('scroll',function(){
            if($(window).scrollTop() > 280){  //当滚动距离大于300
                $target.show()
            }else{
                $target.hide()
            }
        })

        this.target.on('click',function(){
            $(window).scrollTop(0)
        })                    
    }
    _goTop.prototype.createNode = function(){
        this.$ct.append(this.target)
        this.target.hide()  //添加之后先隐藏，等滚动一段距离才显示
    }

    return{
        init:function(){
            new _goTop()
        }
    }
})()
    

module.exports = goTop
