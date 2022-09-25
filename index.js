let imageElement = document.getElementById("image");

let originalImageWidth = "200px";
let len = 200;
imageElement.style.width = originalImageWidth;

function onIncrease() {
    if (len < 300) {
        document.getElementById("warningMessage").textContent = "";
        len += 5;
        originalImageWidth = ((len + 5).toString()) + "px";
        imageElement.style.width = originalImageWidth;
    } else {
        document.getElementById("warningMessage").textContent = "Too big.Decrease the size of Image.";
    }
    document.getElementById("imageWidth").textContent = len;
}

function onDecrease() {
    if (len > 100) {
        document.getElementById("warningMessage").textContent = "";
        len -= 5;
        originalImageWidth = ((len - 5).toString()) + "px";
        imageElement.style.width = originalImageWidth;
    } else {
        document.getElementById("warningMessage").textContent = "Too small. Increase the size of Image.";
    }
    document.getElementById("imageWidth").textContent = len;
}