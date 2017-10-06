var xPositionM, yPositionM, xPositionB, yPositionB;
var isPressed = false;
var sideUnderCursor;

function downB(event) {
    try {
        if (document.getElementById(event.target.id).className == "window-border") {
            isPressed = true;
            var block = document.getElementById(event.target.id);

            yPositionB = parseInt(block.style.top.substring(0, block.style.top.length - 2));
            xPositionB = parseInt(block.style.left.substring(0, block.style.left.length - 2));

            yPositionM = event.clientY;
            xPositionM = event.clientX;

            heightB = parseInt(block.style.height.substring(0, block.style.height.length - 2));
            widthB = parseInt(block.style.width.substring(0, block.style.width.length - 2));
        }
    } catch (error) {
        console.log("Not clickable item!");
    }
}

function upB(event) {
    isPressed = false;
}

function moveB(event) {
    var block = document.getElementById(event.target.id);

    if (defineAngle(block) == false) {
        defineSide(block);
    }

    try {
        if (isPressed == true) {
            switch (sideUnderCursor) {
                case 0:
                    leftTopSizeChange(block);
                    break;
                case 1:
                    topSizeChange(block);
                    break;
                case 2:
                    topRightSizeChange(block);
                    break;
                case 3:
                    rightSizeChange(block);
                    break;
                case 4:
                    rightBottomSizeChange(block);
                    break;
                case 5:
                    bottomSizeChange(block);
                    break;
                case 6:
                    bottomLeftSizeChange(block);
                    break;
                case 7:
                    leftSizeChange(block);
                    break;
                case 8:
                    moveBlock(block);
                    break;
                default:
                    console.log("Сометхинг вронг!!!");
                    break;
            }

        }
    } catch (error) {
        console.log("Mouse out of range!"); 7
    }
}

function defineAngle(block) {
    try {
        if (event.clientX > (parseInt(block.style.left.substring(0, block.style.left.length - 2))) &&
            event.clientX < parseInt(block.style.left.substring(0, block.style.left.length - 2)) + 8 &&
            event.clientY > (parseInt(block.style.top.substring(0, block.style.top.length - 2))) &&
            event.clientY < parseInt(block.style.top.substring(0, block.style.top.length - 2)) + 8) {
            block.style.cursor = "nw-resize";
            sideUnderCursor = 0;
        } else if (event.clientY > (parseInt(block.style.top.substring(0, block.style.top.length - 2))) &&
            event.clientY < parseInt(block.style.top.substring(0, block.style.top.length - 2)) + 8 &&
            event.clientX > (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 8 &&
            event.clientX < (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 16) {
            block.style.cursor = "ne-resize";
            sideUnderCursor = 2;
        } else if (event.clientX > (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 8 &&
            event.clientX < (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 16 &&
            event.clientY > (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 8 &&
            event.clientY < (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 16) {
            block.style.cursor = "nw-resize";
            sideUnderCursor = 4;
        } else if (event.clientY > (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 8 &&
            event.clientY < (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 16 &&
            event.clientX > (parseInt(block.style.left.substring(0, block.style.left.length - 2))) &&
            event.clientX < parseInt(block.style.left.substring(0, block.style.left.length - 2)) + 8) {
            block.style.cursor = "ne-resize";
            sideUnderCursor = 6;
        } else {
            block.style.cursor = "default";
            return false;
        }
    } catch (error) {
        console.log("Not moveable item!");
    }
}

function defineSide(block) {
    try {
        if (event.clientY > (parseInt(block.style.top.substring(0, block.style.top.length - 2))) &&
            event.clientY < parseInt(block.style.top.substring(0, block.style.top.length - 2)) + 8) {
            block.style.cursor = "n-resize";
            sideUnderCursor = 1;
        } else if (event.clientX > (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 8 &&
            event.clientX < (parseInt(block.style.width.substring(0, block.style.width.length - 2)) + parseInt(block.style.left.substring(0, block.style.left.length - 2))) + 16) {
            block.style.cursor = "e-resize";
            sideUnderCursor = 3;
        } else if (event.clientY > (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 8 &&
            event.clientY < (parseInt(block.style.height.substring(0, block.style.height.length - 2)) + parseInt(block.style.top.substring(0, block.style.top.length - 2))) + 16) {
            block.style.cursor = "n-resize";
            sideUnderCursor = 5;
        } else if (event.clientX > (parseInt(block.style.left.substring(0, block.style.left.length - 2))) &&
            event.clientX < parseInt(block.style.left.substring(0, block.style.left.length - 2)) + 8) {
            block.style.cursor = "e-resize";
            sideUnderCursor = 7;
        } else {
            block.style.cursor = "default";
            sideUnderCursor = 8;
        }
    } catch (error) {
        console.log("Not moveable item!");
    }
}

function leftTopSizeChange(block) {
    block.style.top = (yPositionB + (event.clientY - yPositionM)) + "px";
    block.style.height = (heightB - (event.clientY - yPositionM)) + "px";
    block.style.left = (xPositionB + (event.clientX - xPositionM)) + "px";
    block.style.width = (widthB - (event.clientX - xPositionM)) + "px";
}

function topSizeChange(block) {
    block.style.top = (yPositionB + (event.clientY - yPositionM)) + "px";
    block.style.height = (heightB - (event.clientY - yPositionM)) + "px";
}

function topRightSizeChange(block) {
    block.style.top = (yPositionB + (event.clientY - yPositionM)) + "px";
    block.style.height = (heightB - (event.clientY - yPositionM)) + "px";
    block.style.width = (widthB + (event.clientX - xPositionM)) + "px";
}

function rightSizeChange(block) {
    block.style.width = (widthB + (event.clientX - xPositionM)) + "px";
}

function rightBottomSizeChange(block) {
    block.style.width = (widthB + (event.clientX - xPositionM)) + "px";
    block.style.height = (heightB + (event.clientY - yPositionM)) + "px";
}

function bottomSizeChange(block) {
    block.style.height = (heightB + (event.clientY - yPositionM)) + "px";
}

function bottomLeftSizeChange(block) {
    block.style.height = (heightB + (event.clientY - yPositionM)) + "px";
    block.style.left = (xPositionB + (event.clientX - xPositionM)) + "px";
    block.style.width = (widthB - (event.clientX - xPositionM)) + "px";
}

function leftSizeChange(block) {
    block.style.left = (xPositionB + (event.clientX - xPositionM)) + "px";
    block.style.width = (widthB - (event.clientX - xPositionM)) + "px";
}

function moveBlock(block) {
    block.style.top = (yPositionB + (event.clientY - yPositionM)) + "px";
    block.style.left = (xPositionB + (event.clientX - xPositionM)) + "px";
}