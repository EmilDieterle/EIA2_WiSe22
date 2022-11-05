"use strict";
/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let itemContainer = document.querySelector("#itemContainer");
    //Hier kann ein Item hinzugefügt werden
    let selectorInput = document.querySelector("#inputID");
    //Hier kann eine Zahlenmenge des Item hinzugefügt werden
    let selectorAmount = document.querySelector("#amountID");
    //Hier kann ein Kommentar zum Item erstellt werden
    let selectorComment = document.querySelector("#commentID");
    //Hier kann ein Datum zum Item hinzugefügt werden
    let selectorDate = document.querySelector("#dateID");
    let selectorButton = document.querySelector("#btn");
    //Elemente, die nach der dem addItem- Event erstellt werden
    let uncheckedCircle = document.querySelectorAll("#itemContainer .addedDiv .fa-regular fa-circle");
    for (let x = 0; x < uncheckedCircle.length; x++) {
        uncheckedCircle[x].addEventListener("click", clickCircle, false);
    }
    let trash = document.querySelectorAll(".fa-solid fa-trash-can");
    for (let x = 0; x < trash.length; x++) {
        trash[x].addEventListener("click", deleteItem, false);
    }
    let edit = document.querySelectorAll(".fa-solid fa-pen-to-square");
    for (let x = 0; x < edit.length; x++) {
        edit[x].addEventListener("click", editItem, false);
    }
    selectorButton.addEventListener("click", addItem);
    //uncheckedCircle.addEventListener("click", clickCircle);
    //trash.addEventListener("click", deleteItem);
    //edit.addEventListener("click", editItem);
}
function addItem() {
    console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
}
function clickCircle() {
    console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar. Falls fa-regular fa-circle-xmark schon da ist, bekommt es die Klasse .hidden");
}
function deleteItem() {
    console.log("Der ItemContainer entfernt das item Kind durch den Click des <i> trash Elements");
}
function editItem() {
    console.log("Die <p> Elemente können bearbeitet werden");
}
//# sourceMappingURL=script.js.map