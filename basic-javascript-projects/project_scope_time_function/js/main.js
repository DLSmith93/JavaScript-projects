let global_x = 20;

document.getElementById("btn").addEventListener("click", variables);
function variables(){
    let locale_x = 20;

    console.log(global_x == locale_x);
}

function errors(){

    console.log(global_x == 20);
    console.log(locale_x ==  20);
}