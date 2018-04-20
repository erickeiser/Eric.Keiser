
// var name = prompt("What is your name?");

// var output = document.querySelector('#greeting');
// output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";

// if(name) {
//   output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";
// } else {
//   output.innerHTML = "<p>Please tell us your name!</p>";
//}

var firstName = prompt('What is your first name?') || "Visitor";
var lastName = prompt('What is your last name?') || "McDefaultson";
var name = firstName + " " + lastName;

var output = document.querySelector('#greeting');
output.innerHTML = "<p> Thanks for visiting, " + name;