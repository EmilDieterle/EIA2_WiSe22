/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <06.10.2022>
*/

namespace L04_Datenstruktur {

window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

let itemContainer: HTMLDivElement = document.querySelector("#itemContainer") as unknown as HTMLDivElement;
let selectorInput: HTMLElement = document.querySelector("#inputID")as HTMLElement;
let selectorAmount: HTMLElement = document.querySelector("#amountID")as HTMLElement;
let selectorComment: HTMLTextAreaElement = document.querySelector("#commentID") as HTMLTextAreaElement;
let selectorDate: HTMLElement = document.querySelector("#dateID") as HTMLElement;
let selectorButton: HTMLButtonElement = document.querySelector("#btn") as HTMLButtonElement;



//Elemente, die nach der dem addItem- Event erstellt werden
//let check: NodeListOf<HTMLInputElement> = document.querySelectorAll(".check") as NodeListOf<HTMLInputElement>;
//check.forEach(element => {
        
//});
//let uncheckedCircle: NodeListOf<HTMLElement> = document.querySelectorAll("#itemContainer .addedDiv .check");
//let trash: NodeListOf<HTMLInputElement> = document.querySelectorAll(".trash") as NodeListOf<HTMLInputElement>;
//trash.forEach(element => {
//        element.removeChild(item);
//});
//let trash: NodeListOf<HTMLElement> = document.querySelectorAll("#itemContainer .addedDiv .fa-solid fa-trash-can");
//let edit: NodeListOf<HTMLInputElement> = document.querySelectorAll(".edit") as NodeListOf<HTMLInputElement>;
//let edit: NodeListOf<HTMLElement> = document.querySelectorAll("#itemContainer .addedDiv .fa-solid fa-pen-to-square");

//selectorButton.addEventListener("click", addItem);
//itemContainer.addEventListener("click", addItem);
//edit.addEventListener("click", editItem);
//trash.addEventListener("click", deleteItem);



//Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern und <i> Elemente werden hinzugefügt
//function addItem(): void {
selectorButton.addEventListener("click", function(): void {

        let check: HTMLInputElement = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("check");
        itemContainer.appendChild(check);

        let name: HTMLParagraphElement = document.createElement("p");
        name.classList.add("addedItem");
        name.innerText = selectorInput.value;
        itemContainer.appendChild(name);
        selectorInput.value = "";

        let amount: HTMLParagraphElement = document.createElement("p");
        amount.classList.add("addedAmount");
        amount.innerText = selectorAmount.value;
        itemContainer.appendChild(amount);
        selectorAmount.value = "";

        let comment: HTMLParagraphElement = document.createElement("p");
        comment.classList.add("addedComment");
        comment.innerText = selectorComment.value;
        itemContainer.appendChild(comment);
        selectorComment.value = "";

        let date: HTMLParagraphElement = document.createElement("p");
        date.classList.add("addedDate");
        date.innerText = selectorDate.value;
        itemContainer.appendChild(date);
        selectorDate.value = "";

        let edit: HTMLElement = document.createElement("i");
        edit.classList.add("fa-solid", "fa-pen-to-square");
        itemContainer.appendChild(edit);

        let trash: HTMLElement = document.createElement("i");
        trash.classList.add("fa-solid", "fa-trash-can");
        itemContainer.appendChild(trash);

        let item: HTMLDivElement = document.createElement("div");
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

        //Der ItemContainer entfernt das item Kind durch den Click des <i> trash Elements
        function deleteItem(): void {
        itemContainer.removeChild(item);
    }
    
     //Die Paragraphen werden als Kinder entfernt und durch die obrigen, passenden Text/- und Inputfelder ersetzt. Die davorigen Eingaben bleiben erhalten; Die Felder kann man wieder bearbeiten und durch einen neuen Button eingeben
        function editItem(): void {
                console.log("edit- Funktion ist klickbar");
                //name.contentEditable = true;
                //amount.contentEditable = true;
                //comment.contentEditable = true;
                //date.contentEditable = true;

}

});

}

}
