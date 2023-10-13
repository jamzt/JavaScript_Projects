var ages = [2, 10, 18, 20, 13, 15, 30];
// Using arrow function to pass age parameter
checkAge = (age) => age >= 18;
function myFunction() {
    // Use .some() to iterate through the array of ages and display result
    document.getElementById("displayAge").innerHTML = ages.some(CheckAge);
}  



 myFunction = function() {
    return "This is my function"; 
}

// this 1st function can be written using => which doesn't need word fucntion and curly braces
// i.e myFunction = () => "This is my function"; 
// i.e of passign a parameter 
var car; 
car = (val) => "These are my favorite car brands: " + val;
document.getElementById("displayCar").innerHTML = car("Honda, Ford, and Nissan");