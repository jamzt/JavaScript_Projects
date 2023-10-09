function get_Date() {
    if (new Date().getDate() < 15) { // this checks the time using getHours function and returns the question
        document.getElementById("Count").innerHTML = "Less than 2 month till Thanksgiving!";
    }
} 


// basic example of if statement
// if (1 < 2) {
    document.write("the left number is smaller than the number on the right")
}