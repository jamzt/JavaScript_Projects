 var X =50; // var cannot be in var. let can be in var Whereas var can have function or global scope, let and const can have function, global or block scope.
document.write(X);
{
    let X = 30;
    document.write("<br>" + X);
}
document.write("<br>" + X);
