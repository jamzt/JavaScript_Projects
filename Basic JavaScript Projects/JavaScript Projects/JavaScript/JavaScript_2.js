function validateForm() {
    var firstname = document.getElementById("firstname"].value;
    var lastname = document.getElementById("lastname"].value;
    if (fistname === "" || lastname === "") {
        alert("Names must be filled out");
        return false;
    }
    return true;
}