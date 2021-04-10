// Created 3 let variables with Cookies.get, which will fetch the cookies created in app.js.
let red = Cookies.get("red");
let yellow = Cookies.get("yellow");
let green = Cookies.get("green");

// Created a function that will set the color of the div on the selection.html page.
// if the cookie on the page has a name and value of red, the div will turn red.
// if the cookie on the page has a name and value of yellow, the div will turn yellow.
// if the cookie on the page has a name and value of green, the div will turn green.
function setColor() {
    if (red) {
        document.getElementById("result").style.backgroundColor = "red";
    } else if (yellow) {
        document.getElementById("result").style.backgroundColor = "yellow";
    } else if (green) {
        document.getElementById("result").style.backgroundColor = "green";
    }
}

// Calling the function setColor.
setColor("result");

// Created a function that will delete the cookies from the page.
function restart() {
    Cookies.remove("red");
    Cookies.remove("yellow");
    Cookies.remove("green");
}