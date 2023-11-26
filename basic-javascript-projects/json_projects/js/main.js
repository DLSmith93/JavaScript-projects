
function json(){

    let person = {"name":"Devin", "age":"30", "city":"Portland"};

    let myJSON = JSON.stringify(person);
    let jsonParse = JSON.parse('{"name":"Devin", "age":"30", "city":"Portland"}');

    document.getElementById("text1").innerHTML = myJSON
    document.getElementById("text2").innerHTML = jsonParse.name + " is " + jsonParse.age + " and is from " + jsonParse.city;

    
}

function local_Storage(){

    localStorage.setItem("Name", "Devin");

    document.getElementById("text3").innerHTML = localStorage.getItem("Name");
}