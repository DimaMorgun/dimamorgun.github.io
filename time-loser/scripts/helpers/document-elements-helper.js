var gId = (IdName) => {
    var documentElement = document.getElementById(IdName);
    return documentElement;
}

var gCl = (className, classIndex = 0) => {
    var arrayDocumentElements = document.getElementsByClassName(className);
    return arrayDocumentElements[classIndex];
}

var gClS = (className) => {
    var arrayDocumentElements = document.getElementsByClassName(className);
    return arrayDocumentElements;
}

var gTg = (tagName, tagIndex = 0) => {
    var arraydocumentElement = document.getElementsByTagName(tagName);
    return arraydocumentElement[tagIndex];
}

var gTgS = (tagName) => {
    var arraydocumentElement = document.getElementsByTagName(tagName);
    return arraydocumentElement;
}

var fIh = (documentElement, innerHtmlContent) => {
    documentElement.innerHTML = innerHtmlContent;
}