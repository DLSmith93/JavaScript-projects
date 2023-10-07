
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
    for(i = 0; i < instrument.length; ++i){
        content += instrument[i] + "<br>";
    }
    document.getElementById("iteration2").innerHTML = content;
}