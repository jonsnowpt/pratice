function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    return result
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));