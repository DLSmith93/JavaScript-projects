



document.getElementById("click-me").addEventListener("click", dictionary);
document.getElementById("mouse-over").addEventListener("mouseover", dictionary);
function dictionary(myEvent){

    let Animal = {
        species: "Dog",
        color: "Black and Tan",
        breed: "King Charles Cavalier Spaniel",
        age: 2,
        sound: "Bark/Woof"
    };

    if(myEvent.target.id === "click-me"){
        document.getElementById("words1").innerHTML = Animal.breed;
    }
    if(myEvent.target.id === "mouse-over"){
        document.getElementById("words2").innerHTML = "I am a dog I say " + Animal.sound;
    }
}

