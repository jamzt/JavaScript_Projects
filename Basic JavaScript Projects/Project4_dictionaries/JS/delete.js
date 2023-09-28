function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "Tabby",
        Breed: "Domestic Shorthair",
        Age:2,
        Sound:"Meoooooow!"
    };
    delete Animal.Sound; // delete operator edits the dictionary by deleting it from it
    document.getElementById("Dictionary").innerHTML = Animal.Sound
}