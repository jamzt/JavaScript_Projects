var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function while_Loop() {
    var i = 0;
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var keepAdding = "";
    while (i < Instruments.length) {
        keepAdding += Instruments[i] + "<br>";
        i++;

    }
    document.getElementById("Count_the_Instruments").innerHTML = keepAdding;
}