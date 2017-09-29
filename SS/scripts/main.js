var xPositionM, yPositionM, xPositionB, yPositionB;
var isPressed = false;

window.onload = () => {
    document.getElementById("border").style.top = "100px";
    document.getElementById("border").style.left = "100px";
    document.getElementById("border").style.width = "450px";
    document.getElementById("border").style.height = "400px";
}

function downB(event) {
    if (document.getElementById(event.target.id).className == "window-border") {
        isPressed = true;
        var block = document.getElementById(event.target.id);

        yPositionB = parseInt(block.style.top.substring(0, block.style.top.length - 2));
        xPositionB = parseInt(block.style.left.substring(0, block.style.left.length - 2))

        yPositionM = event.clientY;
        xPositionM = event.clientX;
    }
}

function upB(event) {
    isPressed = false;
    var block = document.getElementById(event.target.id);
}

function moveB(event) {
    if (isPressed == true) {
        var block = document.getElementById(event.target.id);

        block.style.top = (yPositionB + (event.clientY - yPositionM)) + "px";
        block.style.left = (xPositionB + (event.clientX - xPositionM)) + "px";
    }
}

function test(event) {
    var block = document.getElementById(event.target.id);

    var x = (parseInt(block.style.left.substring(0, block.style.left.length - 2))) - 1;
    var y = parseInt(block.style.left.substring(0, block.style.left.length - 2)) + 5;

    if (event.clientY > (parseInt(block.style.top.substring(0, block.style.top.length - 2))) - 1 &&
        event.clientY < parseInt(block.style.top.substring(0, block.style.top.length - 2)) + 5) {
        border.style.borderTopColor = "red";
    }
    else if (event.clientY > (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 4 &&
        event.clientY < (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 10) {
        border.style.borderBottomColor = "red";
    }
    else if (event.clientX > (parseInt(block.style.left.substring(0, block.style.left.length - 2))) - 1 &&
        event.clientX < parseInt(block.style.left.substring(0, block.style.left.length - 2)) + 5) {
        border.style.borderLeftColor = "red";
    }
    else if (event.clientX > (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 4 &&
        event.clientX < (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 10) {
            border.style.borderRightColor = "red";
    }
}

function ttest(event) {
    var border = document.getElementById(event.target.id);
    border.style.borderColor = "rgb(1, 87, 234)";
}