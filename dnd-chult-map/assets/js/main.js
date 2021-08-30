function hideHex(hexNum) {
    var x = document.getElementById("hex"+hexNum);
    console.log("Hiding" + hexNum);
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
}