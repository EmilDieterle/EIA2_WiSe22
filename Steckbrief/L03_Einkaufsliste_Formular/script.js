"use strict";
/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let itemContainer = document.getElementById("#itemContainer");
    //Hier kann ein Item hinzugefügt werden
    let selectorInput = document.getElementById("#inputID");
    //Hier kann eine Zahlenmenge des Item hinzugefügt werden
    let selectorAmount = document.getElementById("#amountID");
    //Hier kann ein Kommentar zum Item erstellt werden
    let selectorComment = document.getElementById("#commentID");
    //Hier kann ein Datum zum Item hinzugefügt werden
    let selectorDate = document.getElementById("#dateID");
    let selectorButton = document.getElementById("#btn");
    //Elemente, die nach der dem addItem- Event erstellt werden
    let uncheckedCircle = document.querySelector("fa-regular fa-circle");
    let trash = document.querySelector("fa-solid fa-trash-can");
    let edit = document.querySelector("fa-solid fa-pen-to-square");
    selectorButton.addEventListener("click", addItem);
    uncheckedCircle.addEventListener("click", circleChecked);
    trash.addEventListener("click", deleteItem);
    edit.addEventListener("click", editItem);
}
function addItem() {
    console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
}
function circleChecked() {
    console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
}
function deleteItem() {
    console.log("Der ItemContainer entfernt das item Kind durch den Click des <i> trash Elements");
}
function editItem() {
    console.log("Die Paragraphen werden als Kinder entfernt und durch die obrigen, passenden Text/- und Inputfelder ersetzt. Die davorigen Eingaben bleiben erhalten; Die Felder kann man wieder bearbeiten und durch einen neuen Button eingeben");
}
//let selectorRegularCircle: HTMLElement = document.querySelector(".fa-regular fa-circle")as unknown as HTMLElement;
//selectorRegularCircle.addEventListener("click", function(): void {
//console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
//});
//let selectorCheckedCircle: HTMLElement = document.querySelector(".fa-regular fa-circle-xmark")as unknown as HTMLElement;
//selectorCheckedCircle.addEventListener("click", function(): void {
//console.log("fa-regular fa-circle-xmark erhält die Klasse hidden von fa-regular fa-circle und fa-regular fa-circle ist nun sichtbar");
//});
//let selectorButton: HTMLButtonElement = document.getElementById("#btn") as unknown as HTMLButtonElement;
//selectorButton.addEventListener("click", function(): void {
//console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
//});
//let selectorInput: HTMLElement = document.getElementById("#inputID")as unknown as HTMLElement;
//selectorInput.addEventListener("click", function(): void {
//console.log("Hier kann ein Item hinzugefügt werden.");
//});
//let selectorAmount: HTMLElement = document.getElementById("#amountID")as unknown as HTMLElement;
//selectorAmount.addEventListener("click", function(): void {
//console.log("Hier kann eine Zahlenmenge des Item hinzugefügt werden");
//});
//let selectorTextarea: HTMLTextAreaElement = document.getElementById("#textareaID")as unknown as HTMLTextAreaElement;
//selectorTextarea.addEventListener("click", function(): void {
//console.log("Hier kann ein Kommentar zum Item erstellt werden");
//});
//let selectorDate: HTMLTextAreaElement = document.getElementById("#dateID")as unknown as HTMLTextAreaElement;
//selectorDate.addEventListener("click", function(): void {
//console.log("Hier kann ein Datum zum Item hinzugefügt werden");
//});
//let selectorEdit: HTMLElement = document.getElementById(".fa-solid fa-pen-to-square")as unknown as HTMLElement;
//selectorEdit.addEventListener("click", function(): void {
//console.log("Hier können die Eigenschaften der p- Elemente in dem Div bearbeitet werden");
//});
//let selectorTrash: HTMLElement = document.querySelector("fa-solid fa-trash-can")as unknown as HTMLElement;
//selectorTrash.addEventListener("click", function(): void {
//console.log("Das Div, dem der Trash hinzugehört wird entfernt");
//});
//# sourceMappingURL=script.js.map