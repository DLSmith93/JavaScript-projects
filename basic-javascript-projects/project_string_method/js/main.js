
document.getElementById("con").addEventListener("click", conconate);
function conconate(){
    let part_1 = "I have ";
    let part_2 = "made this ";
    let part_3 = "into a complete ";
    let part_4 = "sentance.";
    let whole_sentance = part_1.concat(part_2, part_3, part_4);

    document.getElementById("cate").innerHTML = whole_sentance;
}

document.getElementById("slice").addEventListener("click", slice_method);
function slice_method(){

    let sentence = "This here is a sentence that says something.";
    let section = sentence.slice(23,33);

    document.getElementById("sentence").innerHTML = section;
}

document.getElementById("submit").addEventListener("click", upperCase);
function upperCase(){

    let name = document.getElementById("upper").value;

    document.getElementById("case").innerHTML = "Here is your name now " + name.toUpperCase();
}

document.getElementById("search").addEventListener("click", search);
function search(){

    let text = "Here is a sentance that has some words in it!";
    let to_find = document.getElementById("input-word").value;
    let position = text.search(to_find);

    document.getElementById("result").innerHTML = "The position of the word you searched for is " + position;
}