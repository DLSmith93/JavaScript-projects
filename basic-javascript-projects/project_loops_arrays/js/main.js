
document.getElementById("while").addEventListener("click", while_loop);
function while_loop(){

    let x = 1;

    while(x < 11){
        document.write("<br>" + x);
        ++x;
        setTimeout(1000);
    }
}

document.getElementById("enter").addEventListener("click", string_length);
function string_length(){

    let temp_string = document.getElementById("input1").value;
    let string1 = temp_string.toString();
    let length = string1.length;

    document.getElementById("output1").innerHTML = "The entered string has " + length + " characters in it."
}

document.getElementById("for-loop").addEventListener("click", for_loop);
function for_loop(){

    let instrument = ["Guitar", "Piano", "Drums", "Bass", "Fiddle", "Banjo"];
    let content = "";
    for(let i = 0; i < instrument.length; ++i){
        content += instrument[i] + "<br>";
    }
    document.getElementById("iteration2").innerHTML = content;
}

document.getElementById("return").addEventListener("click", math_function);
function math_function(){

    let x = addition();

    function addition(){

        return 5 + 6;
    }

    document.getElementById("output2").innerHTML = x;
}

document.getElementById("object").addEventListener("click", object_function);
function object_function(){

    let car = {
        make: "Dodge ",
        model: "viper ",
        year: "2021 ",
        color: "red ",
        description: function (){
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };

        document.getElementById("car-object").innerHTML = car.description();
    
}

document.getElementById("break").addEventListener("click", break_continue);
function break_continue(){

    let text1 = "";
    let text2 = "";

    for(let i = 0; i < 10; ++i){
        if(i === 5) {break};
        text1 += "The number is " + i + "<br>"
    }

    for(let i = 0; i < 10; ++i){
        if(i === 5) {continue};
        text2 += "The number is " + i + "<br>"
    }

    document.getElementById("break-output1").innerHTML = text1;
    document.getElementById("break-output2").innerHTML = text2;
}

document.getElementById("submit-color").addEventListener("click", color_function);
function color_function(){

    let color_output = "";

    let colors = document.getElementById("color-input").value;
    let color_string = " is a great color!";
    switch(colors){
        case "Red": 
            color_output = "Red" + color_string;
        break;
        case "Blue": 
            color_output = "Blue" + color_string;
        break;
        case "Green": 
            color_output = "Green" + color_string;
        break;
        case "Yellow": 
            color_output = "Yellow" + color_string;
        break;
        case "Pink": 
            color_output = "Pink" + color_string;
        break;
        case "Purple": 
            color_output = "Purple" + color_string;
        break;
        default: 
            color_output = "Please enter a color exactly as theya re spelled above."
    }

    document.getElementById("color-output").innerHTML = color_output;
}