/*
//CMD
define(function(require,exports,module){
    var jQuery = require('jquery')
    var goTop = require('gotop')

    new goTop()
})
*/


//AMD

define(['jquery','jrg/03-4-requirejs/js/com/gotop','com/carousel','com/getmore','com/waterfall'],
function($,goTop,Carousel,getMore,waterfall){

    Carousel.init($('.carousel'))
    new goTop()
    getMore.init($('.btn-more'))

})
