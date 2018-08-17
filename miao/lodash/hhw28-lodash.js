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
  //hhw28.intersection([2,1],[2,3])   //[2]
  intersection:function(...arrays){

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
    return this.sumBy(ary, this.identity)
  },
  //hhw28.sumBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n')    //20
  sumBy:function(ary, iteratee = hhw28.identity){
    var result = 0
    iteratee = hhw28.iteratee(iteratee)
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
    return [].concat(...ary)

//方法5
    // return [].concat.apply.bind([].concat,[])
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
  ceil:function(number, precision=0){

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
    return function(value){
      return fn(value)
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

  //hhw28.join(['a', 'b', 'c'], '~')    //'a~b~c'
  //hhw28.join([1,2,3],4)     //'14243'
  join:function(array, separator=','){
    var str = ''
    for(var i=0;i<array.length;i++){
      str += array[i]
      if(i != array.length - 1){
        str += separator
      }
    }
    return str
  },

  //hhw28.last([1,2,3])    //3
  last:function(array){
    return array[array.length-1]
  },

  //hhw28.lastIndexOf([1,2,1,2],2)    //3
  //hhw28.lastIndexOf([1, 2, 1, 2], 2, 2)    //1
  //与indexOf类似，区别是从右往左遍历元素，找到第一个值后返回索引值
  lastIndexOf:function(array, value, fromIndex=array.length-1){
    for(var i=fromIndex; i>0; i--){
      if( value === array[i] ){
        return i
      }
    }
    return -1
  },

  indexOf:function(ary, val, fromIndex=0){
    for(var i = fromIndex; i<ary.length;i++) {
      if (val === ary[i]) {
        return i
      }
    }
    return -1
  },

  //hhw28.pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')    //['b', 'b']
  pull: function(array, ...values){
    var val = [...values]
    return array.filter(function(element){
      return val.indexOf(element) == -1
    })
  },

  //hhw28.reverse([3,2,1])     //[1,2,3]
  reverse: function(array){
    var result = []
    for(var i=array.length-1;i>=0;i--){
      result.push(array[i])
    }
    return result
  },

  cloneDeep: function(obj){
    return Object.assign({}, obj)

    // return JSON.parse(JSON.stringify(obj))
  },

  //hhw28.sortedIndex([30,50],40)    //1
  //hhw28.sortedIndex([1,2,2,2,2,3],2)   //1
  sortedIndex: function(array, value){
    for(var i=0;i<array.length;i++){
      if( array[i] >= value ){
        return i
      }
    }
  },

  //hhw28.union([2],[1,2],[3,4])    //[2,1,3,4]
  union: function(...arrays){
    var result = []
    for(var i=0;i<arrays.length;i++){
      for(var j=0;j<arrays[i].length;j++){
        if( result.indexOf(arrays[i][j]) == -1 ){
          result.push(arrays[i][j])
        }
      }
    }
    return result
  },

  uniq: function(array){
    var result = []
    for(var i=0;i<array.length;i++){
      if( result.indexOf(array[i]) == -1 ){
        result.push(array[i])
      }
    }
    return result

    // Array.from(new Set(array))
  },

  //hhw28.zip(['a', 'b'], [1, 2], [true, false])    //[['a', 1, true], ['b', 2, false]]
  zip: function(...arrays){
    // debugger
    var result = []
    for(var i=0;i<arguments[i].length;i++){
      var ary = []
      for(var j=0;j<arguments.length;j++){
        ary.push(arguments[j][i])
      }
      result.push(ary)
    }
    return result
  },

  //hhw28.unzip([['a', 1, true], ['b', 2, false]])    //['a', 'b'], [1, 2], [true, false]
  unzip: function(array){
    // debugger
    var result = []
    for(var i=0;i<array[0].length;i++){
      var ary = []
      for(var j=0;j<array.length;j++){
        ary.push(array[j][i])
      }
      result.push(ary)
    }
    return result
  },

  //hhw28.without([2, 1, 2, 3], 1, 2)    //[3]
  without: function(array, ...values){
    return array.filter(function(item){
       return !values.includes(item)
    })
  },

  //hhw28.xor([2, 1], [2, 3])    //[1,3]
  //hhw28.xor([1,2,3,4], [2,3,4,5],[2,4,5,6,7],[5,6,7,8])    //[1,8]
  xor: function(...arrays){
    var ary = [].concat(...arrays)

    return ary.filter(item => {
      return ary.indexOf(item) === ary.lastIndexOf(item)
    })
  },

  //hhw28.trim('  abc  ')    //'abc'
  trim: function(str, chars='\\s'){
    return str.replace(RegExp(`^[${chars}]+|[${chars}]+$`, 'gi'), '')
  },
  //hhw28.trimEnd('  abc  ')    //'  abc'
  trimEnd: function(str, chars='\\s'){
    return str.replace(RegExp(`[${chars}]+$`, 'gi'), '')
  },
  //hhw28.trimStart('  abc  ')    //'abc  '
  trimStart: function(str, chars='\\s'){
    return str.replace(RegExp(`^[${chars}]+`, 'gi'), '')
  },
  //hhw28.pad('abc', 8)    // => '  abc   '
  //hhw28.pad('abc', 8, '_-')    // => '_-abc_-_'
  //hhw28.pad('abc', 3)    // => 'abc'
  pad: function(string='', length=0, chars=' '){
    var leftLength
    var rightLength

    if(string.length < length){
      leftLength = Math.floor((length - string.length)/2)
      rightLength = length - leftLength

      for(var i=0;i<leftLength;i+=chars.length){
        string = chars + string
      }
      for(var i=0;i<rightLength;i+=chars.length){
        string += chars
      }
    }
    return string.slice(0,length)
  },
  //hhw28.padEnd('abc', 6)    // => 'abc   '
  //hhw28.padEnd('abc', 6, '_-')    // => 'abc_-_'
  //hhw28.padEnd('abc', 3)    // => 'abc'
  padEnd: function(string='', length=0, chars=' '){
    var endLength = length - string.length
    if(string.length < length){
      for(var i=0; i < endLength; i+=chars.length){
        string += chars
      }
    }
    return string.slice(0,length)
  },
  //hhw28.padStart('abc', 6)    // => '   abc'
  //hhw28.padStart('abc', 6, '_-')    // => '_-_abc'
  //hhw28.padStart('abc', 3)    // => 'abc'
  padStart: function(string='', length=0, chars=' '){
    var startLength = length - string.length
    var startStr = ''
    if(string.length < length){
      while(startStr.length < startLength){
        startStr += chars
      }
    }
    return string = startStr.slice(0,startLength) + string
  },


  //hhw28.size({"a":1,"b":2})   //2
  size: function(collection){
    if(typeof(collection) === 'number' || typeof(collection) === 'string'){
      return collection.length
    }else{
      return Object.keys(collection).length
    }
  },

  //hhw28.isArguments([1, 2, 3])    //false
  //hhw28.isArguments(function() { return arguments; }())    //true
  isArguments: function(value){
    return Object.prototype.toString.call(value)  === '[object Arguments]'
  },
  //hhw28.isArray([1, 2, 3])    //true
  //hhw28.isArray(document.body.children)    //false
  //hhw28.isArray('abc')    //false
  isArray: function(value){
    return value instanceof Array
  },
  isBoolean: function(value){
    return Object.prototype.toString.call(value) === '[object Boolean]'
  },
  isDate: function(value){
    return Object.prototype.toString.call(value) === '[object Date]'
  },
  isElement: function(value){
    return Object.prototype.toString.call(value) === '[object HTMLBodyElement]'
  },
  isFunction: function(value){
    return Object.prototype.toString.call(value) === '[object Function]'
  },
  isNumber: function(value){
    return Object.prototype.toString.call(value) === '[object Number]'
  },
  isObject: function(value){
    return Object.prototype.toString.call(value) === '[object Object]'
  },
  isRegExp: function(value){
    return Object.prototype.toString.call(value) === '[object RegExp]'
  },
  isString: function(value){
    return Object.prototype.toString.call(value) === '[object String]'
  },
  isError: function(value){
    return value instanceof Error
  },
  isNull: function(value){
    return Object.prototype.toString.call(value) === '[object Null]'
  },
  isUndefined: function(value){
    return Object.prototype.toString.call(value) === '[object Undefined]'
  },
  //hhw28.isEmpty(null)
  isEmpty: function(value){
    for(var i in value){
      if(value.hasOwnProperty(i)){
        return false
      }
    }
    return true
  },
  isNaN: function(value){
    return Object.prototype.toString.call(value) === '[object Number]' && isNaN(value)
  },
  //hhw28.isFinite(3)    // => true
  //hhw28.isFinite(Number.MIN_VALUE)    // => true
  //hhw28.isFinite(Infinity)    // => false
  //hhw28.isFinite('3')    // => false
  isFinite: function(value){
    return Object.prototype.toString.call(value) === '[object Number]' && (value !== Infinity)
  },
  //hhw28.isMatch({ 'a': 1, 'b': 2 }, { 'b': 2 })   //true
  //hhw28.isMatch({ 'a': 1, 'b': 2 }, { 'b': 1 })   //false
  //hhw28.isMatch({"a":1,"b":{"c":1}},{"b":{"c":1}})   //true
  isMatch: function(object, source){
    for(var key in object){
      if( source.hasOwnProperty(key) ){
        if( typeof source[key] === 'object'){
          return this.isMatch(object[key], source[key])
        }else if(source[key] === object[key]){
          return true
        }
      }
    }
    return false
  },
  //判断是否为undefined或null
  isNil: function(value){
    return value === undefined || value === null
  },
  //hhw28.toArray({ 'a': 1, 'b': 2 })    //[1, 2]
  //hhw28.toArray('abc')    //['a', 'b', 'c']
  //hhw28.toArray(1)    //[]
  //hhw28.toArray(null)    //[]
  toArray: function(value){
    var result = []
    if( typeof value === 'object' ){
      for(var key in value){
        result.push(value[key])
      }
    }else if( typeof value === 'string' ){
      for(var key in value){
        result.push(value[key])
      }
    }
    return result
  },
  //hhw28.max([4, 2, 8, 6])    // => 8
  //hhw28.max([])    // => undefined
  max: function(array){
    if(array.length === 0 ){
      return undefined
    }
    return Math.max(...array)
  },

  constant: function(value){
    return () => value
  },
  uniqueId: function(prefix=''){
    return prefix + '' + ++count
  },
  //hhw28.range(4)    // => [0, 1, 2, 3]
  //hhw28.range(-4)    // => [0, -1, -2, -3]
  //hhw28.range(1, 5)    // => [1, 2, 3, 4]
  //hhw28.range(0, 20, 5)    // => [0, 5, 10, 15]
  //hhw28.range(0, -4, -1)    // => [0, -1, -2, -3]
  //hhw28.range(1, 4, 0)    // => [1, 1, 1]
  //hhw28.range(0)    // => []
  range: function(start=0, end, step=1){
    var result = []

    if(arguments.length === 1){
      end = arguments[0]
      start = 0

      if(end < 0){
        step = -step
      }
    }
    if(step === 0){
      while(result.length+1 < end){
        result.push(start)
      }
      return result
    }
// debugger
    for(var i=start;Math.abs(i)<Math.abs(end);i+=step){
      result.push(i)
    }
    return result
  },
  //hhw28.rangeRight(4)    // => [3, 2, 1, 0]
  //hhw28.rangeRight(-4)    // => [-3, -2, -1, 0]
  //hhw28.rangeRight(1, 5)    // => [4, 3, 2, 1]
  //hhw28.rangeRight(0, 20, 5)    // => [15, 10, 5, 0]
  //hhw28.rangeRight(0, -4, -1)    // => [-3, -2, -1, 0]
  //hhw28.rangeRight(1, 4, 0)    // => [1, 1, 1]
  //hhw28.rangeRight(0)    // => []
  rangeRight: function(start=0, end, step=1){
    var result = []
    if(arguments.length === 1){
      end = arguments[0]
      start = 0

      if(end < 0){
        step = -step
      }
    }
    if(step === 0){
      while(result.length+1 < end){
        result.unshift(start)
      }
      return result
    }
// debugger
    for(var i=start;Math.abs(i)<Math.abs(end);i+=step){
      result.unshift(i)
    }
    return result
  },
  times: function(n, iteratee = identity){
    var result = []
    for (var i = 0; i < n; i++)
        result.push(iteratee(i))
    return result
  },
  //hhw28.repeat('*', 3)    // => '***'
  //hhw28.repeat('abc', 2)    // => 'abcabc'
  //hhw28.repeat('abc', 0)    // => ''
  repeat: function(string='', n=1){
    var result = ''
    for(var i=0;i<n;i++){
      result += string
    }
    return result
  },
  //hhw28.escape('fred, barney, & pebbles')   // => 'fred, barney, &amp; pebbles'
  escape: function(string=''){
    var ary = string.split(' ')
    for(var i=0;i<ary.length;i++){
      switch (ary[i]) {
        case '&':
          ary[i] = '&amp;'
          break;
        case '<':
          ary[i] = '&lt;'
          break;
        case '>':
          ary[i] = '&gt;'
          break;
        case '"':
          ary[i] = '&quot;'
          break;
        default:
          break;
      }
    }
    return ary.join(' ')
  },
//hhw28.values({a: 1, b: 2})    // => [1, 2] (iteration order is not guaranteed)
//hhw28.values('hi')    // => ['h', 'i']
  values: function(object){
    var result = []
    // debugger
    if( typeof object === 'object' ){
      for(var key in object){
        result.push(object[key])
      }
    }
    if( typeof object === 'string' ){
      for(var key of object){
        result.push(key)
      }
    }
    return result
  },
  //hhw28.keys({a: 1, b: 2})    // => ['a', 'b']
  //hhw28.keys('hi')    // => ['0', '1']
  keys: function(object){
    var result = []
    if( typeof object === 'object' ){
      for(var key in object){
        result.push(key)
      }
    }
    if( typeof object === 'string' ){
      for(var key in object){
        result.push(''+key+'')
      }
    }
    return result
  },
  //hhw28.toPairs({a: 1, b: 2})    //[['a', 1], ['b', 2]]
  toPairs: function(object){
    var result = []
    var item = []
    for(var key in object){
      item.push(key)
      item.push(object[key])
      result.push(item)
      item = []
    }
    return result
  },
  //hhw28.pick({'a':1,'b':'2','c':3},['a','c'])   //{'a':1,'c':3}
  pick: function(object, paths){
    var result = {}
    for(var i=0;i<paths.length;i++){
      for(var key in object){
        if(key === paths[i]){
          result[key] = object[key]
        }
      }
    }
    return result
  },
  //hhw28.omit({'a':1,'b':'2','c':3},['a','c'])   //{ 'b': '2' }
  omit: function(object, paths){
    var result = {}
    for(var key in object){
      if( !paths.includes(key) ){
        result[key] = object[key]
      }
    }
    return result
  },
  //hhw28.invert({ 'a': 1, 'b': 2, 'c': 1 })   //{ '1': 'c', '2': 'b' }
  invert: function(object){
    var obj1 = this.cloneDeep(object)
    var result = {}
    for(var key in object){
      for(var char in obj1){
        if( object[key] === obj1[char] ){
          result[object[char]] = char
        }
      }
    }
    return result
  },

}