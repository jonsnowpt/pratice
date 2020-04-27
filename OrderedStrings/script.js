const listString = [1,2,'a','b'];

function filter_list(l) {
    return l.filter(function(x){
        return typeof x === "number"
      });
  }

  console.log(filter_list(listString));