// continue statement skips over one interation in the loop if one condition is met
function skipIteration() {
    var output = document.getElementById("output");
    for (let i = 0; i < 99; i++) {
        if (i === 5) { continue; }
        text = "Skip if i equals 5."
        text += "The number is " + i;
      }
    
    output.textContent=text;
}
