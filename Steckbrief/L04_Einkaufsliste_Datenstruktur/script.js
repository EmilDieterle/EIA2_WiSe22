"use strict";
/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <06.10.2022>
*/
var L04_Datenstruktur;
(function (L04_Datenstruktur) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let itemContainer = document.querySelector("#itemContainer");
        let selectorInput = document.querySelector("#inputID");
        let selectorAmount = document.querySelector("#amountID");
        let selectorComment = document.querySelector("#commentID");
        let selectorDate = document.querySelector("#dateID");
        let selectorButton = document.querySelector("#btn");
        let item = document.querySelectorAll(".addedDiv");
        let name = document.querySelectorAll(".addedItem");
        let amount = document.querySelectorAll(".addedAmount");
        let comment = document.querySelectorAll(".addedComment");
        let date = document.querySelectorAll(".addedDate");
        selectorButton.addEventListener("click", function () {
            let check = document.createElement("input");
            check.type = "checkbox";
            check.classList.add("check");
            itemContainer.appendChild(check);
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
            edit.classList.add("fa-solid", "fa-pen-to-square");
            itemContainer.appendChild(edit);
            let trash = document.createElement("i");
            trash.classList.add("fa-solid", "fa-trash-can");
            itemContainer.appendChild(trash);
            let item = document.createElement("div");
            item.classList.add("addedDiv");
            item.appendChild(check);
            item.appendChild(name);
            item.appendChild(amount);
            item.appendChild(comment);
            item.appendChild(date);
            item.appendChild(edit);
            item.appendChild(trash);
            itemContainer.appendChild(item);
            edit.addEventListener("click", editItem);
            trash.addEventListener("click", deleteItem);
            function deleteItem() {
                itemContainer.removeChild(item);
            }
            function editItem() {
                console.log("edit- Funktion ist klickbar");
                //name.contentEditable = true;
                //amount.contentEditable = true;
                //comment.contentEditable = true;
                //date.contentEditable = true;
            }
        });
    }
})(L04_Datenstruktur || (L04_Datenstruktur = {}));
//# sourceMappingURL=script.js.map