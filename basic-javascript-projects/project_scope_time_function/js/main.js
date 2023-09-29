let global_x = 20;

//compares a gloabal variable with a locale variable
document.getElementById("log").addEventListener("click", variables);
function variables(){
    let locale_x = 20;

    console.log(global_x == locale_x);
}

//purposefully get an error by calling a locale variable from another function
document.getElementById("log2").addEventListener("click", errors)
function errors(){

    console.log(global_x == 20);
    console.log(locale_x ==  20);
}

//checks the current time of day
document.getElementById("get-date").addEventListener("click", condition);
function condition(){

    const time = new Date();

    if(time.getHours() > 18){
        document.getElementById("statement").innerHTML = "Good Evening its 00" + time.getHours();
    }
    else{
        document.getElementById("statement").innerHTML = "Good Morning!";
    }
}

//Reads in users age and checks if they are over 21 or not
document.getElementById("submit").addEventListener("click", age_verify);
function age_verify(){

    let age = document.getElementById("age").value;

    if(age >= 21){
        document.getElementById("result").innerHTML = "Congratz, you can buy beer!.";
    }
    else{
        document.getElementById("result").innerHTML = "Sorry, you're not old enough!";
    }
}

//Checks the time of day and offers the correct greeting
document.getElementById("time").addEventListener("click", time_day);
function time_day(){

    let Time = new Date().getHours();
    let reply = "";

    if(Time > 0 && Time <= 12){
        reply = "Good Morning!";
    }
    else if(Time > 12 && Time < 18){
        reply = "Good Afternon!";
    }
    else{
        reply = "Good Evening!";
    }

    document.getElementById("time-day").innerHTML = reply + " Its 00" + Time;
}