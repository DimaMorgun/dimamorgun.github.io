function closeWindow(event) {
    document.getElementById(event.target.id).style.display = "none";
}

function addFolder(event) {
    folderSample = document.createElement("div");
    folderSample.className = "folder";
    folderSample.setAttribute("id", Date.now());
    folderSample.innerHTML = '<img src="./media/folder.svg"  alt="Folder">TestFolder';

    document.getElementById(rightPress).appendChild(folderSample);
    createHiddenFolder(event);
}

function addFile(event) {
    folderSample = document.createElement("div");
    folderSample.className = "file";
    folderSample.setAttribute("id", Date.now());
    folderSample.innerHTML = '<img src="./media/file.svg" alt="Folder">TestFile.txt';

    document.getElementById(rightPress).appendChild(folderSample);
}

function addPicture(event) {
    folderSample = document.createElement("div");
    folderSample.className = "picture";
    folderSample.setAttribute("id", Date.now());
    folderSample.innerHTML = '<img src="./media/picture.svg" alt="Folder">TestPicture.png';

    document.getElementById(rightPress).appendChild(folderSample);
}

function createHiddenFolder(event) {
    hiddenFolderSample = document.createElement("div");
    hiddenFolderSample.className = "window-border";
    hiddenFolderSample.setAttribute("id", Date.now() + "border");
    hiddenFolderSample.setAttribute("onmousedown", "downB(event)");
    hiddenFolderSample.setAttribute("onmouseup", "upB(event)");
    hiddenFolderSample.setAttribute("onmousemove", "moveB(event)");
    hiddenFolderSample.innerHTML = '<div class="border-content-left">\
    <img src= "./media/small_windows.icon.svg" alt= "Windows icon" class="small-icon">\
    </div>\
    <div class="border-content-right">\
    <button class="small_button default">_</button>\
    <button class="small_button default">⬒</button>\
    <button class="small_button danger" id="' + Date.now() + 'border" onmousedown="closeWindow(event)">X</button>\
    </div>\
    <div class="window-field" id="' + Date.now() + 'folder">\
    </div>';

    hiddenFolderSample.style.top = "100px";
    hiddenFolderSample.style.left = "100px";
    hiddenFolderSample.style.width = "500px";
    hiddenFolderSample.style.height = "400px";

    document.getElementById(rightPress).appendChild(hiddenFolderSample);
}