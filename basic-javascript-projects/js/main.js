//alert("Hello World!");

//window.alert("Hello There!");

document.write("Why, Hello!");

let x = "I like to eat burritos!";
let string = "This is a string in a window";
let y = "Concatenated" + "String";
let family = "Winchesters", father = "John", mother = "Mary", son1 = "Dean", son2 = "Sam"
let sent1 = "This is the begining of the string";
let sent2 = "and this is the end of the string.";

document.write("<br>" + x);
window.alert("<br>" + string);

document.write("<br>Lisa told bart, \"Knock it off, Bart! or I'll tell dad!\" <br> \"Eat my shorts!\" Bart responded.");

document.write("<br><br>\"Be who you are and say what you feel," + " becasue those who mind don\'t matter and those who matter don\'t mind\"" + "<br>-Dr. Seuss");

document.write("<br>" + y);

document.write("<br>" + father);

document.write("<br>" + (3 + 3) + "<br>");

function buttonText(){ // Defining the fucntion and naming it
    let str = "This is the button text!"; // Difining variable and giving it a string value
    document.getElementById("button_text").innerHTML = window.alert(str); // putting thr value of the variable into the HTML element with the id = button_text
                                                                     
}

function test(sent1, sent2){
    document.getElementById("tester").innerHTML = (sent1 + " " + sent2);
}