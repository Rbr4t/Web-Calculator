// Global variables
const screen = document.querySelector('.onscreen');
let OPERATION = "";
let ISFLOAT = false;

//basic operations 
function add(a, b){
    return Math.round((parseFloat(a)+parseFloat(b))*1000)/1000;  // Why am I rounding so much? - floating point math
};

function subtract(a, b){
    return Math.round((parseFloat(a)-parseFloat(b))*1000)/1000;
};

function multiply(a, b){
    return Math.round((parseFloat(a)*parseFloat(b))*1000)/1000;
};

function divide(a, b){
    return b!=0?Math.round(parseFloat(a)/parseFloat(b)*1000)/1000: a!==""&&b!=="" ?"nice try": "NaN";
};



// Function which operates and returns answer
function operate(a, OPERATION, b){
    switch (OPERATION){
        case "+":
            return add(a, b);
            
        case "-":
            return subtract(a, b);
            
        case "*":
            return multiply(a, b);
            
        case "/":
            return divide(a, b);
    };
};



// Display the input to the screen
function displayToScreen(e){
    if (!ISFLOAT || (ISFLOAT && e.target.id !==".")){
        const textNode = document.createTextNode(e.target.id);

        if (!screen.textContent.includes("NaN")){
            screen.appendChild(textNode);
        };
    };
};



// Get the input of numbers
const input = document.querySelector('.numbers');
input.addEventListener('click', function(e){
    let screenContent = screen.textContent.split(OPERATION);
    let a = screenContent[0];
    let b = screenContent[1];
    

    if (e.target.id==="."){
        displayToScreen(e);
        ISFLOAT = true;
    };

    if (e.target.id !== "="){
        displayToScreen(e);
    } else if (e.target.id === "=" && OPERATION!==""){
        const answer = operate(a, OPERATION, b)
        screen.textContent = answer;
        OPERATION = "";
        
    }; 
});



// Clear screen functionality
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    screen.textContent = ""
    ISFLOAT = false;
    OPERATION = ""
});



// Delete button functionality
const deleteContent = document.querySelector('#delete');
deleteContent.addEventListener('click', ()=>{
    let deletebit = screen.textContent[screen.textContent.length -1];
    if("+-*/".includes(deletebit)){
        OPERATION = "";
    };
    if (screen.textContent === "NaN"){
        let newText = screen.textContent.slice(0, screen.textContent.length -3);
        screen.textContent = newText;
    } else {
        let newText = screen.textContent.slice(0, screen.textContent.length -1);
        screen.textContent = newText;
    };
});



// Change the operator + display it on screen
function changeOperator(e){
    OPERATION = e.target.id;
    const textNode = document.createTextNode(e.target.id);
    screen.appendChild(textNode);
};



// Get the operation
const OPERATIONs = document.querySelector('.operators');
OPERATIONs.addEventListener('click', function(e){
    if (OPERATION===""){
        changeOperator(e);
        ISFLOAT = false;
    } else if (OPERATION!==""){
        let screenContent = screen.textContent.split(OPERATION);
        const answer = operate(screenContent[0], OPERATION, screenContent[1])
        screen.textContent = answer;
        changeOperator(e);
        ISFLOAT = false;
    }
});