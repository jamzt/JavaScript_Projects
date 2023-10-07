function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; // NaN because 0 cann't be / by 0
    document.getElementById("Test1").innerHTML = isNaN("This is a string."); //returns true because words
    document.getElementById("Test2").innerHTML = isNaN("007") // returns false because 007 is a number
    
}
function my_Function1() {
    document.write(2E310) // this will return infinity
}

function my_Function2() {
    document.write(-3E310) // this will return negative infinity
}