

// Global variables
const screen = document.querySelector('.onscreen');
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
    return b!=0 ?Math.round(parseFloat(a)/parseFloat(b)*1000)/1000: "nice try";
};



// Function which operates and returns answer
function operate(a, operation, b){
    
    switch (operation!=""){
        case operation == "+":
            return add(a, b);
            
        case operation == "-":
            return subtract(a, b);
            
        case operation == "*":
            return multiply(a, b);
            
        case operation == "/":
            return divide(a, b);
            
        
    };
};



// Display the input to the screen
function displayToScreen(e){
    if (!isFloat || (isFloat && e.target.id !==".")){
        const textNode = document.createTextNode(e.target.id);
        screen.appendChild(textNode);
    };
};



// Get the input of numbers
const input = document.querySelector('.numbers');
input.addEventListener('click', function(e){
    let screenContent = screen.textContent.split(operation);
    console.log(operation)
    if (e.target.id==="."){
        displayToScreen(e);
        isFloat = true;
    };

    if (e.target.id !== "="){
        displayToScreen(e);
    } else if (e.target.id === "=" && operation!==""){
        
        

        let a = screenContent[0];
        let b = screenContent[1];

        const answer = operate(a, operation, b)
        screen.textContent = answer;
        operation = "";
        
    }; 
});



// Clear screen functionality
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    screen.textContent = ""
    isFloat = false;
});


// Delete button functionality
const deleteContent = document.querySelector('#delete');
deleteContent.addEventListener('click', ()=>{
    let deletebit = screen.textContent.slice(0, screen.textContent.length -1);
    screen.textContent = deletebit;
});





// Change the operator + display it on screen
function changeOperator(e){
    console.log(operation)
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
    } else if (operation!==""){
        let screenContent = screen.textContent.split(operation);
        const answer = operate(screenContent[0], operation, screenContent[1])
        screen.textContent = answer;
        changeOperator(e);
        isFloat = false;
    }
});



