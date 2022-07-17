//basic operations 
function add(a, b){
    return parseFloat(a)+parseFloat(b);
};

function subtract(a, b){
    return parseFloat(a)-parseFloat(b);
};

function multiply(a, b){
    return parseFloat(a)*parseFloat(b);
};

function divide(a, b){
    return Math.round(parseFloat(a)/parseFloat(b)*100)/100;
};

function operate(a, operation, b){
    switch (operation!==""){
        case operation == "+":
            return add(a, b);
            
        case operation == "-":
            return subtract(a, b);
            
        case operation == "*":
            return multiply(a, b);
            
        case operation == "/":
            return divide(a, b);
            
        default:
            console.log("ERROR");
    };
};