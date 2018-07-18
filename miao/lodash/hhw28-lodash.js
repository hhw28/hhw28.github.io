window['hhw28'] = {
  // chunk(['a', 'b', 'c', 'd','e'], 3)  //[["a", "b", "c"],["d", "e"]]
  chunk: function(array, size) {
    var sum = []
    for(var i=0;i<array.length;i+=size){
      sum.push( array.slice(i,i+size) )
    }
    return sum
  },

  // compact([0, 1, false, 2, '', 3])  //[1, 2, 3]
  compact: function(array){
    var arr = array
    for(var i=0;i<arr.length;i++){
      if( !arr[i] ){
        arr.splice(i,1)
        i--
      }
    }
    return arr
  },


  // difference([2,1],[2,3])  //1
  // difference([2,1],[2,3])  //1
  // difference([1,2,3,4],[2,3,4,5])  //1
  // difference([1,2,3,4],[1,3],[4])  //2
  // difference([1,2,3,4,5,6,7,8],[1,3],[4,8],[6])  //2,5,7
  difference: function(array, values){
    var arr = []
    for(var i=0;i<array.length;i++){   //i代表array的每一项
      var same = false
      for(var k=1;k<arguments.length;k++){  //k代表 arguments 的每一项
        if( arguments[k].includes(array[i]) ){
          same = true
          break
        }
      }
      if(!same){  //没有相同项,加入进新数组
        arr.push(array[i])
      }
    }
    return arr
  },

  // drop([1,2,3]) //[2,3]
  // drop([1,2,3],2) //[3]
  // drop([1,2,3],5) //[]
  // drop([1,2,3],0) //[1,2,3]
  // drop([1,2,3],5) //[]
  // drop([1,2,3]) //[2,3]
  drop: function(array,n){
    if( n == 0){
      return array
    }
    n = n || 1
    array.splice(0,n)
    return array
  },
  dropRight: function(array,n){
    if( n != 0 ){
      n = n || 1
    }
    // if(array.length-n >= 0 ){
    //   startIndex = array.length - n
    // }else{
    //   startIndex = 0
    // }
    startIndex = array.length-n >= 0 ? array.length-n : 0
    array.splice(startIndex,n)
    return array
  },


  indexOf:function(ary, val, startPos){
    // if (startPos === undefined) {
    //   startPos = 0
    // }
    startPos = startPos || 0
    // if (arguments.length === 2) {
    //   startPos = 0
    // }
    for(var i = startPos; i<ary.length;i++) {
      if (val === ary[i]) {
        return i
      }
    }
    return -1
  },

  includes:function(ary,val){
    if (val !== val) {
      for(var i = 0; i<ary.length; i++) {
        if (ary[i] === ary[i]) {
          return true
        }
      }
      return false
    }

    return indexOf(ary, val) !== -1
  },

  //原函数取反
  negate: function(f){
    return function(...args){
      return !f(...args)
    }
  },

  map: function(array,fn){
    return array.reduce(function(prev,next,index,array){
      prev.push( fn(next,index,array) )
      return prev
    },[])
  },
  filter: function(array,fn){
    return array.reduce(function(result,item,index,array){
      if( fn(item,index,ary) ){
        result.push(item)
      }
      return result
    },[])
  },
  forEach: function(){

  },
  slice: function(){
    return array.reduce(function(result,item,index,array){

    },[])
  },
//fill([4, 6, 8, 10], '*', 1, 3)   //[4,'*'，'*'，10]
  fill: function(array,value,start,end){
    start = start || 0
    end = end || array.length

    return array.reduce(function(result,item,index,array){

      if( index >= start && index < end ){
        result.push( value )
      }else{
        result.push(item)
      }
      return result
    },[])

    // for(var i=start;i<end;i++){
    //   array.splice(i,1,value)
    // }
    // return array
  },
  concat: function(array){
    var arr = []
    for(var i=0;i<array.length;i++){
      arr.push(array[i])
    }
    for(var i=array.length;i<arguments.length;i++){
      arr.push(arguments[i])
    }
    return arr
  },

  // var getXof = _.property('x')
  // getXof({
  //   a:1,
  //   b:2,
  //   x:5,
  // })    //5
  property:function(){
    return function(obj){
      return obj[propName]
    }
  },


  identity:function(v){
    return v
  },
  sum:function(ary){
    // var result = 0
    // for(var i=0;i<ary;i++){
    //   result += ary[i]
    // }
    // return result
    return sumBy(ary,identity)
  },

  sumBy:function(ary,iteratee){
    var result = 0
    for(var i=0;i<ary.length;i++){
       result += iteratee(ary[i])
    }
    return result
  },

  matches:function(scr){
    return function(obj){
      for(var key in src){
        if(src[key] != obj[key]){
          return false
        }
      }
      return true
    }
  },

  //hhw28.flatten([1, [2, [3, [4]], 5]])   //[1,2,[3,[4]],5]
  flatten:function(ary){
// 方法1
    // var result = []

    // for(var i=0;i<ary.length;i++){
    //   if( !Array.isArray(ary[i]) ){
    //     result.push(ary[i])
    //   }else{
    //     for(var j=0;j<ary[i].length;j++){
    //       result.push(ary[i][j])
    //     }
    //   }
    // }
    // return result

//方法2
    // return ary.reduce((result,item)=>{
    //   if (Array.isArray(item)) {
    //   // result.splice(result.length, 0, ...item)
    //   result = [...result, ...item]
    // } else {
    //   result = [...result, item]
    // }
    //   return result
    // },[])

//方法3
    // return [].concat(...ary)

//方法4
    return this.flattenDepth(ary,1)
  },

  //hhw28.flattenDeep([1, [2, [3, [4]], 5]])   //[1,2,3,4,5]
  flattenDeep:function(ary){
//方法1
    // var result = []
    // for(var i=0;i<ary.length;i++){
    //   if(Array.isArray(ary[i])){
    //     var tmp = this.flattenDeep(ary[i])
    //     result = [...result,...tmp]
    //   }else{
    //     result.push(ary[i])
    //   }
    // }
    // return result

//方法2
    return this.flattenDepth(ary,100)
  },

  //hhw28.flattenDeep([1, [2, [3, [4]], 5]],2)  //[1,2,3,[4],5]
  flattenDepth:function (ary,depth){
    if(depth == 0){
      return ary.slice()  // [...ary]
    }
    var result = []
    for(var i=0;i<ary.length;i++){
      if(Array.isArray(ary[i])){
        var tmp = this.flattenDepth(ary[i],depth-1)
        result = [...result,...tmp]
      }else{
        result.push(ary[i])
      }
    }
    return result
  },


}