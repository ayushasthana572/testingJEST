function addTwoNumber(a,b){
    if(!a||!b){
        throw new Error("Invalid Arguments");
    }
    return a+b;
}

function subtractTwoNumber(a,b){
    if(!a||!b){
        throw new Error("Invalid Arguments");
    }
    return a-b;
}

function multiplyTwoNumber(a,b){
    if(!a||!b){
        throw new Error("Invalid Arguments");
    }
    return a*b;
}

function divideTwoNumber(a,b){
    if(!b){
        throw new Error("Divisor cant be zero");
    }
    return a/b;
}
module.exports= {
    addTwoNumber,
    subtractTwoNumber,
    multiplyTwoNumber,
    divideTwoNumber
};