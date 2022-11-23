
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


function returnsAnAnonymousFunction(cb) {
    return cb();
  }
  returnsANamedFunction (function (){
    return "before all";
  })

  function returnsANamedFunction (){
    return function namedFunction(){};
  }