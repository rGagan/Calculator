const calc = document.querySelector(".calc");
const display = document.querySelector(".displayData");

// added the keyput input functionality
document.addEventListener('keydown', (e) => {
    //regexp to match numbers
    if(e.key.match(/[0-9\.]/))
    {
        display.innerHTML+=e.key;
    }
    //regexp to match operators
    else if(e.key.match(/[\+\*\-\/\=\%]/))
    {
        result();
        if(!(e.key==="="))
            display.innerHTML+=e.key; 
    }
})

calc.addEventListener('click', (e)=> {
    // display screen of the calculator which concats the numbers and operators untill =/AC is pressed
    if(e.path[0].className==="numbers")
    {
        display.innerHTML+=e.path[0].innerHTML; 
    }
    else if(e.path[0].className==="operator")
    {
        result();
        if(!(e.path[0].textContent==="="))
            display.innerHTML+=e.path[0].innerHTML; 
    }
    else if(e.path[0].className==="AC")
    {
        display.innerHTML="";
    }
    else
    {
        display.innerHTML= display.innerHTML.slice(0, display.innerHTML.length-1);
    }
 } )

const add = (arr) =>
{
    return parseFloat(arr[0])+parseFloat(arr[1]);
}

const subtract = (arr) =>
{
    return parseFloat(arr[0])-parseFloat(arr[1]);
}

const divide = (arr) =>
{
    return parseFloat(arr[0])/parseFloat(arr[1]);
}

const multiply = (arr) =>
{
    return parseFloat(arr[0])*parseFloat(arr[1]);
}

const modul = (arr) =>
{
    return parseFloat(arr[0])%parseFloat(arr[1]);
}

// Using regexp to split the numbers from and separate the constructors
const result=() => {
    // Using regexp to split the numbers from and separate the constructors
    const nums = display.innerHTML.split(/[^0-9\.]/);
    if(nums.length===1)
    {
        return;
    }
    const op = display.innerHTML[display.innerHTML.search(/[^0-9\.]/)];

    let disp;
    switch(op)
    {
        case '+':
            disp =add(nums);
            break;
        case '-':
            disp =subtract(nums);
            break;
        case '/':
            disp =divide(nums);
            break;
        
        case '*':
            disp =multiply(nums);
            break;
        case '%':
            disp =modul(nums);
            break;
            
    }

    display.innerHTML=disp;
} 

