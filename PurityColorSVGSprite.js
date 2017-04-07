var svgSymbols = document.querySelector("#svg-symblo");
for (var k = 0; k < svgSymbols.length; k++) {
    var svgSymbol = svgSymbols[k].cloneNode(true);
    var symbolFill = svgSymbol.querySelectorAll("*[fill]");
    var symbolId = svgSymbol.querySelectorAll("*[id]");
    for (var i = 0; i < symbolFill.length; i++) {
        symbolFill[i].removeAttribute("fill");
    }
    for (var j = 0; j < symbolId.length; j++) {
        var originalId = symbolId[j].getAttribute("id");
        symbolId[i].setAttribute("id", originalId + "-pc")
    }
    document.getElementsByClassName("svg-svgSymbol")[k].parentNode.appendChild(svgSymbol);
}