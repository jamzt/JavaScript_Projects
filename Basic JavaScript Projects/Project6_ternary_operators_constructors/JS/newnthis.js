function Animal(Size, Age, Color, Type) { 
    this.Animal_Size = Size;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
    this.Animal_Type = Type;
}
var Neo = new Animal("medium", 2, "tabby", "cat");
var Sparky = new Animal("large", 4, "gold", "dog"); // in this js this and new are constructor variables that can't be assigned to any other variable
var Nigel = new Animal("small", 3, "lime", "parrot");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Neo is a " + Neo.Animal_Size + "-sized " + Neo.Animal_Color + "-colored " + Neo.Animal_Age + 
    " year old " + Neo.Animal_Type;
}