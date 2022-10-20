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
        let div0 = document.querySelector("#div0");
        div0.addEventlistener("click", placeSpan);
        document.addEventListener("keydown", chooseSpan);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script.js.map