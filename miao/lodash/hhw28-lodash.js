window['hhw28'] = {
  // chunk(['a', 'b', 'c', 'd','e'], 3)  =>  [["a", "b", "c"],["d", "e"]]
  chunk: function(array, size) {
    var sum = []
    for(var i=0;i<array.length;i+=size){
      sum.push( array.slice(i,i+size) )
    }
    return sum
  },

  // compact([0, 1, false, 2, '', 3])  =>  [1, 2, 3]
  compact: function(array){
    for(var i=0;i<array.length;i++){
      if( !array[i] ){
        array[i].splice(i,1)
      }
    }
    return array
  },


  concat: function(){
    var arr = []
    for(var i=0;i<array.length;i++){
      arr.push(array[i])
    }
    for(var i=array.length;i<arguments.length;i++){
      arr.push(arguments[i])
    }
    return arr
  },


  difference: function(){
    var arr = []
    for(var i=0;i<array.length;i++){
      var same = false
      for(var k=1;k<arguments.length;k++){
        if( arguments[k].includes( array[i] ) ){
          same = true
          break
        }
      }
      if(!same){
        arr.push(array[i])
      }
    }
    return arr
  },


  drop: function(array,n){
    n = n || 1
    array.splice(0,n)
    return array
  },
  dropRight: function(array,n){
    if( n != 0 ){
      n = n || 1
    }
    startIndex = array.length-n >= 0 ? array.length-n : 0
    array.splice(startIndex,n)
    return array
  },


  fill: function(array, value, start, end){
    start = start || 0
    end = end || array.length
    for(var i=start;i<end;i++){
      array.splice(i,1,value)
    }
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
}