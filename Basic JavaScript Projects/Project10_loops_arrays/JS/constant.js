function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "orange";
    Musical_Instrument.price = "$900";
    Musical_Instrument.material = "machogany";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.material + Musical_Instrument.type + " was " + Musical_Instrument.price;
}         