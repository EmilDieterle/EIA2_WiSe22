"use strict";
/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/
window.addEventListener("load", function () {
    let selectorRegularCircle = document.querySelector(".fa-regular fa-circle");
    selectorRegularCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle ändert sich in fa-regular fa-circle-xmark. Ein Datum wird ausgegeben über dem Kauf");
    });
    let selectorCheckedCircle = document.querySelector(".fa-regular fa-circle-xmark");
    selectorCheckedCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle-xmark ändert sich in fa-regular fa-circle");
    });
    let selectorButton = document.getElementById("#btn");
    selectorButton.addEventListener("click", function () {
        console.log("Ein ListItem wird hinzugefügt");
    });
    let selectorTrash = document.querySelector("fa-solid fa-trash-can");
    selectorTrash.addEventListener("click", function () {
        console.log("Die Liste in der sich die Trash- can befindet, wird entfernt");
    });
    let selectorInput = document.getElementById("#input");
    selectorInput.addEventListener("click", function () {
        console.log("Hier kann ein ListItem hinzugefügt werden");
    });
    let selectorAmount1 = document.getElementById("#amount1");
    selectorAmount1.addEventListener("click", function () {
        console.log("Hier wird die Anzahl der Bananen angegeben in Liste 1");
    });
    let selectorAmount2 = document.getElementById("#amount2");
    selectorAmount2.addEventListener("click", function () {
        console.log("Hier wird die Anzahl der Äpfel angegeben in Liste 2");
    });
    let selectorText1 = document.getElementById("#textarea1");
    selectorText1.addEventListener("click", function () {
        console.log("Hier kann ein Kommentar zu Liste 1 erstellt werden");
    });
    let selectorText2 = document.getElementById("#textarea2");
    selectorText2.addEventListener("click", function () {
        console.log("Hier kann ein Kommentar zu Liste 2 erstellt werden");
    });
});
//# sourceMappingURL=script.js.map