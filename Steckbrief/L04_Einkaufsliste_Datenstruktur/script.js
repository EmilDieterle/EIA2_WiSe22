"use strict";
/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
*/
window.addEventListener("load", function () {
    let selectorInput = document.getElementById("#inputID");
    selectorInput.addEventListener("click", function () {
        console.log("Hier kann ein Item hinzugefügt werden.");
    });
    let selectorAmount = document.getElementById("#amountID");
    selectorAmount.addEventListener("click", function () {
        console.log("Hier kann eine Zahlenmenge des Item hinzugefügt werden");
    });
    let selectorComment = document.getElementById("#textareaID");
    selectorComment.addEventListener("click", function () {
        console.log("Hier kann ein Kommentar zum Item erstellt werden");
    });
    let selectorDate = document.getElementById("#dateID");
    selectorDate.addEventListener("click", function () {
        console.log("Hier kann ein Datum zum Item hinzugefügt werden");
    });
    let selectorButton = document.getElementById("#btn");
    selectorButton.addEventListener("click", function () {
        console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
        let uncheckedCircle = document.createElement("i");
        uncheckedCircle.classList.add("fa-regular fa-circle");
        let checkedCircle = document.createElement("i");
        checkedCircle.classList.add(".hidden");
        let name = document.createElement("p");
        name.classList.add("addedItem");
        name.innerText = selectorInput.value;
        //listContainer.appendChild(item);
        selectorInput.value = "";
        let amount = document.createElement("p");
        item.classList.add("addedAmount");
        amount.innerText = selectorAmount.value;
        //listContainer.appendChild(item);
        selectorAmount.value = "";
        let comment = document.createElement("p");
        comment.classList.add("addedComment");
        comment.innerText = selectorComment.value;
        //listContainer.appendChild(item);
        selectorComment.value = "";
        let date = document.createElement("p");
        date.classList.add("addedComment");
        date.innerText = selectorDate.value;
        //listContainer.appendChild(item);
        selectorDate.value = "";
        let edit = document.createElement("i");
        edit.classList.add("fa-solid fa-pen-to-square");
        let trash = document.createElement("i");
        edit.classList.add("fa-solid fa-trash-can");
        let item = document.createElement("div");
        item.classList.add("listStyle");
        item.appendChild(uncheckedCircle);
        item.appendChild(uncheckedCircle);
        item.appendChild(list);
        item.appendChild(trash);
    });
    let selectorRegularCircle = document.querySelector(".fa-regular fa-circle");
    selectorRegularCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
    });
    let selectorCheckedCircle = document.querySelector(".fa-regular fa-circle-xmark");
    selectorCheckedCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle-xmark erhält die Klasse hidden von fa-regular fa-circle und fa-regular fa-circle ist nun sichtbar");
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