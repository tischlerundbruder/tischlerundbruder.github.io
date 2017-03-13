var textArea = document.getElementsByClassName("floating-text")[0]

var createText = function (classname) {
    var text = document.createElement("div");
    text.className = "text " + classname;
    return text;
};

textArea.appendChild(createText("foreground middle"));