
document.getElementById("btn1").addEventListener("click", addition);
function addition(){

    let num1 = 5;
    let num2 = 12;

    document.getElementById("math1").innerHTML = "5 + 12 = " + (num1 + num2);
}

document.getElementById("btn2").addEventListener("click", subtraction);
function subtraction(){


    let num1 = 23;
    let num2 = 8;

    document.getElementById("math2").innerHTML = "23 - 8 = " + (num1 - num2);
}

document.getElementById("btn3").addEventListener("click", multiply);
function multiply(){


    let multi = 11 * 6;

    document.getElementById("math3").innerHTML = "11 x 6 = " + multi;
}

document.getElementById("btn4").addEventListener("click", division);
function division(){

    let divide = 144 / 12;

    document.getElementById("math4").innerHTML = "144 / 12 = " + divide;
}

document.getElementById("btn5").addEventListener("click", more_math);
function more_math(){

    let simple_math = (1 + 2) * 10 / 2 - 5;
    
    document.getElementById("math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

document.getElementById("btn6").addEventListener("click", modulo);
function modulo(){

    let simple_math = 25 % 6;

    document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

document.getElementById("btn7").addEventListener("click", negate);
function negate(){

    let x = 10;

    document.getElementById("math7").innerHTML = "10 negated is " + (-x)
}

document.getElementById("btn8").addEventListener("click", incrament);
function incrament(){
    let x = 0;

    document.getElementById("math8").innerHTML = ++x;
}

document.getElementById("btn9").addEventListener("click", decrament);
function decrament(){
    
    let x = 0;

    document.getElementById("math9").innerHTML = --x;
}