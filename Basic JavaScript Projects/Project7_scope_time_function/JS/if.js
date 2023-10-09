function get_Date() {
    if (new Date().getHours() < 18) { // this checks the tiem using getHours function and returns the question if it's before 6pm
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
} 