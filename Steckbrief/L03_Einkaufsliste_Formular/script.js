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
    document.querySelector(".fa-regular fa-circle-xmark")?.addEventListener("click", function () {
        console.log("fa-regular fa-circle-xmark ändert sich in fa-regular fa-circle");
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
    document.getElementById("#amount1")?.addEventListener("click", function () {
        console.log("Hier wird die Anzahl der Bananen angegeben in Liste 1");
    });
    document.getElementById("#amount2")?.addEventListener("click", function () {
        console.log("Hier wird die Anzahl der Äpfel angegeben in Liste 2");
    });
    document.getElementById("#textarea1")?.addEventListener("click", function () {
        console.log("Hier kann ein Kommentar zu Liste 1 erstellt werden");
    });
    document.getElementById("#textarea2")?.addEventListener("click", function () {
        console.log("Hier kann ein Kommentar zu Liste 2 erstellt werden");
    });
});
//# sourceMappingURL=script.js.map