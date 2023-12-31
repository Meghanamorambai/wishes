function show() {
    var txt = document.getElementById("txt").value;
    if (txt.length === 0) {
        alert("Please enter your name");
    } else {
        document.getElementById("hd").innerHTML = txt;
        document.getElementById("pr").style.display = "none";
        document.getElementById("psd").style.display = "block";
    }
}
