var jquery = require('./js/jquery-1.9.1.js')
var Carousel = require('./js/carousel.js')
var getMore = require('./js/getmore.js')
var goTop = require('./js/gotop.js')

Carousel.init($('.carousel'))
goTop.init()
getMore.init($('.btn-more'))