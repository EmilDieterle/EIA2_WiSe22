"use strict";
/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
*/
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let itemContainer = document.getElementById("#itemContainer");
    let selectorInput = document.getElementById("#inputID");
    let selectorAmount = document.getElementById("#amountID");
    let selectorComment = document.getElementById("#commentID");
    let selectorDate = document.getElementById("#dateID");
    let selectorButton = document.getElementById("#btn");
    function addItem() {
        //Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern und <i> Elemente werden hinzugefügt
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
        date.classList.add("addedDate");
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
        function circleChecked() {
            console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
            uncheckedCircle.classList.remove("fa-regular", "fa-circle");
            uncheckedCircle.classList.add("fa-regular", "fa-circle-check-xmark");
            if (uncheckedCircle.getAttribute("fa-circle-check")) {
                uncheckedCircle.classList.remove("fa-regular", "fa-circle");
                checkedCircle.classList.remove("hidden");
                uncheckedCircle.classList.add("hidden");
                checkedCircle.classList.add("fa-regular", "fa-circle");
            }
        }
        //        function deleteItem(): void {
        //   itemContainer.removeChild(item);
        //}
        //       function editItem(): void {
    }
    itemContainer.addEventListener("click", editItem);
    trash.addEventListener("click", deleteItem);
    selectorButton.addEventListener("click", addItem);
    uncheckedCircle.addEventListener("click", circleChecked);
}
//Hier kann ein Item hinzugefügt werden
//Hier kann eine Zahlenmenge des Item hinzugefügt werden
//Hier kann ein Kommentar zum Item erstellt werden
//Hier kann ein Datum zum Item hinzugefügt werden
//Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern und <i> Elemente werden hinzugefügt
//fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar
//Die Paragraphen werden als Kinder entfernt und durch die obrigen, passenden Text/- und Inputfelder ersetzt. Die davorigen Eingaben bleiben erhalten; Die Felder kann man wieder bearbeiten und durch einen neuen Button eingeben
//# sourceMappingURL=script.js.map