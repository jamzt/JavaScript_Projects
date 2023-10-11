function breakLoop() {
    var output = document.getElementById("output");
    
    for (var i = 1; i <= 99; i++) {
        if (i === 5) {
            text = "Loop broken at iteration 5.";
            break; 
        }
    }
    
    output.textContent = text;
}
