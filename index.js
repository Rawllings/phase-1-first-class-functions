
function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function (){
    return "Hello, World!"
})

function  returnsANamedFunction (fn) {
    var fn;
    return fn();
}
returnsANamedFunction (function age(){
    return 30;
})


  function returnsANamedFunction (){
    return function namedFunction(){};
  }

  const returnsAnAnonymousFunction = function () {
    return "an anonymous function" ,function() {};
  }