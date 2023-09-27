
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