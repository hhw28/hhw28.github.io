
require.config({
    baseUrl:"../03-4-requirejs/js",   //基础路径，当找js/lib/gotop.js时只需写gotop
    paths:{
        'jquery':'jquery/jquery-1.9.1'   //定义的特殊路径，当需要该路径的时候直接写jquery
    },
    // shim:{

    // }
});

//加载入口模块
requirejs(['app/index'])


/* 也可以直接define，无需加载入口
define(['jquery','gotop','carousel','getmore','waterfall'],
function($,goTop,Carousel,getMore,waterfall){

    Carousel.init($('.carousel'))
    new goTop()
    getMore.init($('.btn-more'))

})
*/