function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 2023;
        function Plus_one() {Starting_point += 1;} // this is a nested function within Count() function
        Plus_one();
        return Starting_point;
    }
}