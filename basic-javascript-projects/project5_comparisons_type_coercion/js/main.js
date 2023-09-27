
document.getElementById("type").addEventListener("click", random_stuff);
function random_stuff(){
    
    document.write(typeof "Word");
    document.write("<br>");
    document.write(typeof 3);
    document.write("<br>");
    document.write("10" + 5)


}

function vehicle(Make, Model, Year, Color){
    this.vehicle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

document.getElementById("get-car").addEventListener("click", get_vehicle);
function get_vehicle(){
    document.getElementById("car").innerHTML = "Erik drives a " + Erik.vehicle_color + " " + Erik.vehicle_model +
    " manufactured in " + Erik.vehicle_year;
}

document.getElementById("counting").addEventListener("click", counting);
function counting(){
    document.getElementById("count").innerHTML = count();
    function count(){
        let starting_point = 9;
        function plus_one(){
            starting_point += 1;
        }
        plus_one();
        return starting_point;
    }
    
}

document.getElementById("values").addEventListener("click", values);
function values(){

    document.getElementById("value1").innerHTML = 0/0;
    document.getElementById("value2").innerHTML = isNaN("This is a sting.");
    document.getElementById("value3").innerHTML = isNaN("007");
    document.getElementById("value4").innerHTML = (-3E310);
    document.getElementById("value5").innerHTML = (3E310);
}

document.getElementById("bool"),addEventListener("click", bool);
function bool(myEvent){

    if(myEvent.target.id == "bool"){
        document.write(10 > 2);
        document.write("<br>");
        document.write(10 < 2);
        console.log(2 + 2)
        console.log(3 == 5);
        document.write("<br>");
        document.write(10 == 10);
        document.write("<br>");
        document.write(3 == 10);
    }
}

document.getElementById("compare").addEventListener("click", compare);
function compare(){

    num1 = 10;
    num2 = 10;
    num3 = 82;
    num4 = "82";
    string1 = "Magnus";
    string2 = "Magnus";

    document.write(num1 === num2);
    document.write("<br>");
    document.write(num3 === num4);
    document.write("<br>");
    document.write(string1 === string2);

}

document.getElementById("logic").addEventListener("click", logic);
function logic(){

    document.write(5 > 2 && 10 > 4);
    document.write("<br>");
    document.write(5 > 10 && 10 > 4);
    document.write("<br>");
    document.write(5 > 10 || 10 > 4);
    document.write("<br>");
    document.write(5 > 10 || 10 > 20);
}