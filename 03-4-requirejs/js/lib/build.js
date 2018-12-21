
({
    baseUrl:"../../js/lib",      //指向main
    paths:{
        'jquery':'../jquery/jquery-1.9.1', 
        app:'../app',
        com:'../com',
        requireLib: '../require'
    },
    name:'main',
    out:'../../dist/merge.min.js',
    include: ["requireLib"]
})
