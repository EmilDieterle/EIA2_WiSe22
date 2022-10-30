"use strict";
/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/
window.addEventListener("load", function () {
    document.querySelector(".fa-regular fa-circle")?.addEventListener("click", function () {
        console.log("fa-regular fa-circle ändert sich in fa-regular fa-circle-xmark");
    });
    document.getElementById("#btn")?.addEventListener("click", function () {
        console.log("Ein ListItem wird hinzugefügt");
    });
    document.querySelector("fa-solid fa-trash-can")?.addEventListener("click", function () {
        console.log("Die Liste in der sich die Trash- can befindet, wird entfernt");
    });
    document.getElementById("#input")?.addEventListener("click", function () {
        console.log("Hier kann ein ListItem hinzugefügt werden");
    });
});
//# sourceMappingURL=script.js.map