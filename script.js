// Global variables
const screen = document.querySelector('.nums');
let operation = "";

let isFloat = false;

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

// Function which operates and returns answer
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
            return "ERROR";
    };
};



// Display the input to the screen
function displayToScreen(e){
    // stupid spaghetti code for not letting more than 1 comma into the number
    if (!isFloat || (isFloat && e.target.id !==".")){
        const textNode = document.createTextNode(e.target.id);
        screen.appendChild(textNode);
    } 
    
};



// Get the input of numbers
const input = document.querySelector('.numbers');
input.addEventListener('click', function(e){
    if (e.target.id==="."){
        displayToScreen(e)
        isFloat = true;
    }
    if (e.target.id !== "="){
        displayToScreen(e)
        //console.log(e.target.id);
    } else if (e.target.id === "="){
        let screenContent = screen.textContent.split(operation);
        const answer = operate(screenContent[0], operation, screenContent[1])
        screen.textContent = answer;
        operation = ""
        console.log(operation)
    } 
});



// Clear screen functionality
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    screen.textContent = ""
    isFloat = false;
});




// Change the operator + display it on screen
function changeOperator(e){
    operation = e.target.id;
    const textNode = document.createTextNode(e.target.id);
    screen.appendChild(textNode);

}


// Get the operation
const operations = document.querySelector('.operators');
operations.addEventListener('click', function(e){
    if (operation===""){
        changeOperator(e);
        isFloat = false;
    };
});