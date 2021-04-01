// Created 3 let variables with Cookies.get, which will fetch the cookies created in app.js.
let red = Cookies.get("red", "red");
let yellow = Cookies.get("yellow", "yellow");
let green = Cookies.get("green", "green");

// Created a function that will set the color of the div on the selection.html page.
// if the cookie on the page has a name and value of red, the div will turn red.
// if the cookie on the page has a name and value of yellow, the div will turn yellow.
// if the cookie on the page has a name and value of green, the div will turn green.
function setColor(getElementById) {
    if (document.cookie = red) {
        document.getElementById("result").style.backgroundColor = "red";
    } else if (document.cookie = yellow) {
        document.getElementById("result").style.backgroundColor = "yellow";
    } else if (document.cookie = green) {
        document.getElementById("result").style.backgroundColor = "green";
    }
}

// Calling the function setColor.
setColor("result");

// Created a function that will delete the cookies from the page.
function restart() {
    Cookies.remove("red", "red");
    Cookies.remove("yellow", "yellow");
    Cookies.remove("green", "green");
}