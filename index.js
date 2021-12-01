function receivesAFunction (name, cb){
    return name(cb)
}

function returnsANamedFunction(){
    return returnsANamedFunction
}
 
function returnsAnAnonymousFunction(){
    console(function(){
        return returnsAnAnonymousFunction
    });
    return console
}

function returnsAnAnonymousFunction(){
    return function(){};
}
    