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
            let name = document.createElement("label");
            name.classList.add("addedItem");
            name.innerText = selectorInput.value;
            itemContainer.appendChild(name);
            selectorInput.value = "";
            let amount = document.createElement("label");
            amount.classList.add("addedAmount");
            amount.innerText = selectorAmount.value;
            itemContainer.appendChild(amount);
            selectorAmount.value = "";
            let comment = document.createElement("label");
            comment.classList.add("addedComment");
            comment.innerText = selectorComment.value;
            itemContainer.appendChild(comment);
            selectorComment.value = "";
            let date = document.createElement("label");
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
            let done;
            function editItem() {
                console.log("edit- Funktion ist klickbar");
                name.contentEditable = true;
                amount.contentEditable = true;
                comment.contentEditable = true;
                date.contentEditable = true;
                let done = document.createElement("i");
                done.classList.add("fa-solid", "fa-circle-check");
                item.appendChild(done);
                done.addEventListener("click", endEditable);
                function endEditable() {
                    console.log("endEditable ist klickbar");
                    name.contentEditable = false;
                    amount.contentEditable = false;
                    comment.contentEditable = false;
                    date.contentEditable = false;
                    item.removeChild(done);
                }
            }
        });
    }
})(L04_Datenstruktur || (L04_Datenstruktur = {}));
//# sourceMappingURL=script.js.map