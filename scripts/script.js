function setTheme(mode) {
    if (mode === "dark") {
        document.getElementById("mainPage").style.backgroundColor = "black";
        document.getElementById("mainPage").style.color = "white";
        document.getElementById("settings").innerHTML = "Current Setting: Dark Mode";
    } 
    else if (mode === "light") {
        document.getElementById("mainPage").style.backgroundColor = "white";
        document.getElementById("mainPage").style.color = "black";
        document.getElementById("settings").innerHTML = "Current Setting: Light Mode";
    } 
    else {
        document.getElementById("mainPage").style.backgroundColor = "#d9b8f5";
        document.getElementById("mainPage").style.color = "#70569e";
        document.getElementById("settings").innerHTML = "Current Setting: Default Mode";
    }
}