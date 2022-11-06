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
    let uncheckedCircle = document.querySelector("#uncheckedCircle");
    let checkedCircle = document.querySelector("#checkedCircle");
    //let uncheckedCircle: NodeListOf<HTMLElement> = document.querySelectorAll("#itemContainer .addedDiv .fa-regular fa-circle");
    let trash1 = document.querySelector("#trash1");
    let trash2 = document.querySelector("#trash2");
    //let trash: NodeListOf<HTMLElement> = document.querySelectorAll("#itemContainer .addedDiv .fa-solid fa-trash-can");
    let edit1 = document.querySelector("#edit1");
    let edit2 = document.querySelector("#edit2");
    //let edit: NodeListOf<HTMLElement> = document.querySelectorAll("#itemContainer .addedDiv .fa-solid fa-pen-to-square");
    edit1.addEventListener("click", editItem);
    edit2.addEventListener("click", editItem);
    selectorButton.addEventListener("click", addItem);
    trash1.addEventListener("click", deleteItem);
    trash2.addEventListener("click", deleteItem);
    uncheckedCircle.addEventListener("click", clickCircle);
    checkedCircle.addEventListener("click", clickCircle);
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