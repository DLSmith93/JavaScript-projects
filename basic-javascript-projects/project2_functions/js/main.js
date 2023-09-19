
window.onkeyup = function string1(){
    let string1 = "This is the first string";
    let string2 = "This is the second string";

    document.getElementById("docs").innerText = (string1 + " and " + string2);
}
window.onkeydown = function string2(){
    let sentance = "I am learning";
    sentance += " a lot from this book";

    document.getElementById("concatenate").innerHTML = sentance;
}




document.write("This file is properly linked!")