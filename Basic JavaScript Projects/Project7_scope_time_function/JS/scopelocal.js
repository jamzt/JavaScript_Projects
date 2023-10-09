function Add_numbers_1() {
    var X = 10; // here the variable is declared within the function and can be accessed only by this function
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();