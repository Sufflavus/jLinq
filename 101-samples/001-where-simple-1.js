(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
  
    var result = jL.fromArray(numbers)
                   .where(function(n){
                       return n < 5;
                   }).toArray();

    console.log("Numbers < 5:"); 

    result.forEach(function(item) {
        console.log(item);
    });
})();
