"use strict";
/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
*/
window.addEventListener("load", function () {
    let itemContainer = document.getElementById("itemContainer");
    let selectorButton = document.getElementById("#btn");
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
    selectorButton.addEventListener("click", function () {
        console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern und <i> Elemente werden hinzugefügt");
        let uncheckedCircle = document.createElement("i");
        uncheckedCircle.classList.add("fa-regular fa-circle");
        itemContainer.appendChild(uncheckedCircle);
        let checkedCircle = document.createElement("i");
        checkedCircle.classList.add(".hidden");
        itemContainer.appendChild(checkedCircle);
        let name = document.createElement("p");
        name.classList.add("addedItem");
        name.innerText = selectorInput.value;
        itemContainer.appendChild(name);
        selectorInput.value = "";
        let amount = document.createElement("p");
        amount.classList.add("addedAmount");
        amount.innerText = selectorAmount.value;
        itemContainer.appendChild(amount);
        selectorAmount.value = "";
        let comment = document.createElement("p");
        comment.classList.add("addedComment");
        comment.innerText = selectorComment.value;
        itemContainer.appendChild(comment);
        selectorComment.value = "";
        let date = document.createElement("p");
        date.classList.add("addedComment");
        date.innerText = selectorDate.value;
        itemContainer.appendChild(date);
        selectorDate.value = "";
        let edit = document.createElement("i");
        edit.classList.add("fa-solid fa-pen-to-square");
        itemContainer.appendChild(edit);
        let trash = document.createElement("i");
        edit.classList.add("fa-solid fa-trash-can");
        itemContainer.appendChild(trash);
        let item = document.createElement("div");
        item.classList.add("addedDiv");
        item.appendChild(uncheckedCircle);
        item.appendChild(checkedCircle);
        item.appendChild(name);
        item.appendChild(amount);
        item.appendChild(comment);
        item.appendChild(date);
        item.appendChild(edit);
        item.appendChild(trash);
        itemContainer.appendChild(item);
    });
    //let selectorRegularCircle: HTMLElement = document.querySelector(".fa-regular fa-circle")as unknown as HTMLElement;
    uncheckedCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
    });
    let selectorCheckedCircle = document.querySelector(".fa-regular fa-circle-xmark");
    selectorCheckedCircle.addEventListener("click", function () {
        console.log("fa-regular fa-circle-xmark erhält die Klasse hidden von fa-regular fa-circle und fa-regular fa-circle ist nun sichtbar");
    });
    //let selectorEdit: HTMLElement = document.getElementById(".fa-solid fa-pen-to-square")as unknown as HTMLElement;
    edit.addEventListener("click", function () {
        console.log("Hier können die Eigenschaften der p- Elemente in dem Div bearbeitet werden");
    });
    //let selectorTrash: HTMLElement = document.querySelector("fa-solid fa-trash-can")as unknown as HTMLElement;
    trash.addEventListener("click", function () {
        console.log("Das Div, dem der Trash hinzugehört wird entfernt");
        itemContainer.removeChild(item);
    });
});
//# sourceMappingURL=script.js.map