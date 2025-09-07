function setTheme(mode) {
    if (mode === "dark") {
        document.getElementById("mainPage").style="background-color:black;color:white"
        document.getElementById("settings").innerHTML = "Current Setting: Dark Mode";
    } 
    else if (mode === "light") {
        document.getElementById("mainPage").style="background-color:white;color:black"
        document.getElementById("settings").innerHTML = "Current Setting: Light Mode";
    } 
    else {
        document.getElementById("mainPage").style="background-color:#d9b8f5;color:#70569e";
        document.getElementById("settings").innerHTML = "Current Setting: Default Mode";
    }
}