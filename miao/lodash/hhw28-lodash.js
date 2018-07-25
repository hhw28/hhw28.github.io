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

  //hhw28.includes([1, 2, 3], 1)   //true
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
  negate: function(fn){
    return function(...args){
      return !fn(...args)
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
      if( fn(item,index,array) ){
        result.push(item)
      }
      return result
    },[])
  },
  forEach: function(){

  },
  //hhw28.slice([1,2,3],0,2)  //[1,2]
  slice: function(array,start=0,end=array.length){
    return array.reduce(function(result,item,index,array){
      if( index >= start && index < end  ){
        result.push(item)
      }
      return result
    },[])

    // var result = []
    // for(var i=start;i<end;i++){
    //   result.push(array[i])
    // }
    // return result
  },
//fill([4, 6, 8, 10], '*', 1, 3)   //[4,'*'，'*'，10]
  fill: function(array,value,start=0,end=array.length){
    // start = start || 0
    // end = end || array.length
//方法1
    return array.reduce(function(result,item,index,array){
      if( index >= start && index < end ){
        result.push( value )
      }else{
        result.push(item)
      }
      return result
    },[])
//方法2
    // for(var i=start;i<end;i++){
    //   array.splice(i,1,value)
    // }
    // return array
  },

  //hhw28.concat([1],2,[3],[[4]])  //[1,2,3,[4]]
  concat: function(array){
    var arr = []
    for(var i=0;i<array.length;i++){
      arr.push(array[i])
    }
    for(var i=array.length;i<arguments.length;i++){
      if(Array.isArray(arguments[i])){
        for(var j=0;j<arguments[i].length;j++){
          arr.push(arguments[i][j])
        }
      }else{
        arr.push(arguments[i])
      }
    }
    return arr
  },

  // var getXof = _.property('x')
  // getXof({
  //   a:1,
  //   b:2,
  //   x:5,
  // })    //5
  property:function(propName){
//方法1
    // return function(obj){
    //   return obj[propName]
    // }
//方法2
    return this.get.bind(null,propName)
  },
  get:function(name,obj){
    return obj[name]
  },
  //hhw28.head([1,2,3])  //[1]
  //hhw28.head([])  //[undefined]
  head:function(array){
    if(!array[0]){
      return array[0]
    }
    return array[0]
  },
  //hhw28.initial([1,2,3])  //[1,2]
  initial:function(array){
    return this.slice(array,0,array.length-1)
  },
  //hhw28.intersection([2,1],[2,3])
  intersection:function(array){

  },


  identity:function(value){
    return value
  },
  sum:function(ary){
    // var result = 0
    // for(var i=0;i<ary;i++){
    //   result += ary[i]
    // }
    // return result
    return this.sumBy(ary,this.identity)
  },

  sumBy:function(ary,iteratee){
    var result = 0
    for(var i=0;i<ary.length;i++){
       result += iteratee(ary[i])
    }
    return result
  },

  matches:function(source){
    return function(obj){
      //return obj是否是source的超集
      for(var key in source){
        if(source[key] != obj[key]){
          return false
        }
      }
      return true
    }
  },
  bind:function(f,...fixedArgs){
    return function(...args){
      return f(...fixedArgs,...args)
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
    // return this.flattenDepth(ary,1)

//方法4
    // return [].concat(...ary)

//方法5
    return [].concat.apply.bind([].concat,[])
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

  add:function(augend,addend){
    return augend + addend
  },
  //hhw28.ceil(4.006)  //5
  //hhw28.ceil(6.004,2)  //6.01
  //hhw28.ceil(6040)  //6100
  ceil:function(number,precision=0){

  },

  groupBy:function(ary,propName){
//方法1
    // var map = {}
    // for(var item of ary){
    //   var key = predicate(item)
    //   if(key in map){
    //     map[key].push(item)
    //   }else{
    //     map[key] = [item]
    //   }
    // }
    // return map
//方法2
    return ary.ruduce(function(map,item,index,ary){
      var key = predicate(item)
      if(key in map){
        map[key].push(item)
      }else{
        map[key] = [item]
      }
      return map
    },{})
  },

  ary:function(fn, n = fn.length){
    return function(...args){
      return fn(...args.slice(0,n))
    }
  },
  //
  unary:function(fn){
    return function(...args){
      return fn(...args)
    }
  },

  flip:function(fn){
    return function(...args){
      return fn(...args.reverse())
    }
  },

  spread:function(fn,start=0){
    return function(ary){
      // return fn(...args)
      return fn.apply(null,ary)
    }

    // return f => f.apply.bind(f,null)
  },
}