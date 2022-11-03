"use strict";
/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
*/
window.addEventListener("load", function () {
    let selectorRegularCircle = document.querySelector(".fa-regular fa-circle");
    selectorRegularCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
    });
    let selectorCheckedCircle = document.querySelector(".fa-regular fa-circle-xmark");
    selectorCheckedCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle-xmark erhält die Klasse hidden von fa-regular fa-circle und fa-regular fa-circle ist nun sichtbar");
    });
    let selectorButton = document.getElementById("#btn");
    selectorButton.addEventListener("click", function () {
        console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
    });
    let selectorInput = document.getElementById("#inputID");
    selectorInput.addEventListener("click", function () {
        console.log("Hier kann ein Item hinzugefügt werden.");
    });
    let selectorAmount = document.getElementById("#amountID");
    selectorAmount.addEventListener("click", function () {
        console.log("Hier kann eine Zahlenmenge des Item hinzugefügt werden");
    });
    let selectorTextarea = document.getElementById("#textareaID");
    selectorTextarea.addEventListener("click", function () {
        console.log("Hier kann ein Kommentar zum Item erstellt werden");
    });
    let selectorDate = document.getElementById("#dateID");
    selectorDate.addEventListener("click", function () {
        console.log("Hier kann ein Datum zum Item hinzugefügt werden");
    });
    let selectorEdit = document.getElementById(".fa-solid fa-pen-to-square");
    selectorEdit.addEventListener("click", function () {
        console.log("Hier können die Eigenschaften der p- Elemente in dem Div bearbeitet werden");
    });
    let selectorTrash = document.querySelector("fa-solid fa-trash-can");
    selectorTrash.addEventListener("click", function () {
        console.log("Das Div, dem der Trash hinzugehört wird entfernt");
    });
});
//# sourceMappingURL=script.js.map