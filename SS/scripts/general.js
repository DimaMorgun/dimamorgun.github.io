window.onload = () => {
    document.getElementById("border").style.top = "100px";
    document.getElementById("border").style.left = "100px";
    document.getElementById("border").style.width = "500px";
    document.getElementById("border").style.height = "400px";

    document.getElementById("footer-panel").style.top = document.documentElement.scrollTop + window.innerHeight - 40 + "px";
    
    document.getElementById("timer").innerHTML = new Date().toLocaleTimeString();
}

window.setInterval(() => {
    document.getElementById("timer").innerHTML = new Date().toLocaleTimeString();

    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 300) {
        var block = document.getElementById("footer-panel");

        block.style.top = document.documentElement.scrollTop + window.innerHeight - document.documentElement.scrollTop / 5 - 40 + "px";
        block.style.height = 40 + document.documentElement.scrollTop / 5 + "px";
    }
}, 1);

var rightPress;

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    var context = document.getElementById("context");
    rightPress = event.target.id;

    context.style.display = "block";

    if (event.clientX > window.innerWidth - 100) {
        context.style.left = event.clientX - 100 + "px";
    }
    else {
        context.style.left = event.clientX + "px";
    }
    if (event.clientY > window.innerHeight - 141) {
        context.style.top = event.clientY - 141 + "px";
    }
    else {
        context.style.top = event.clientY + "px";
    }
}, false);

document.onmousedown = function (e) {
    document.getElementById("context").style.display = "none";
}

function bodyScrool(event) {
    var block = document.getElementById("footer-panel");

    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop <= 300) {
        block.style.top = document.documentElement.scrollTop + window.innerHeight - document.documentElement.scrollTop / 5 - 40 + "px";
        block.style.height = 40 + document.documentElement.scrollTop / 5 + "px";
    }
}
