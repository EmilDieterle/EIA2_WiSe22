"use strict";
/*
Aufgabe: <L02_EventListener>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
Quellen: <>
*/
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        let div0 = document.querySelector("#div0");
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        let div1 = document.querySelector("#div1");
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let body = document.querySelector("body");
        body.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
function setInfoBox(_event) {
    let target = document.querySelector("span");
    let x = _event.clientX + 10 + "px";
    let y = _event.clientY + 10 + "px";
    target.innerHTML = x + " " + y + " " + _event.target;
    target.style.top = y;
    target.style.left = x;
}
function logInfo(_event) {
    console.log(target);
}
//# sourceMappingURL=script.js.map