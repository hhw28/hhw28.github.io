

function asyncMap(ary, asyncMapper, callback){
  ary.forEach(it => asyncMapper(it))
}

function asyncEach(ary, asyncIterator,callback){
  var count = 0
  for(let i=0;i<ary.length;i++){
    asyncIterator(ary[i], function(err){
      count++
      if(count === ary.length){
        callback(null)
      }
    })
  }
}

function asyncFilter(ary, asyncPredicate, callback){

}

function square(val,cb){
  cb(null,val*val)
}

asyncMap([1,2,3,4],square,function(err,result){

})