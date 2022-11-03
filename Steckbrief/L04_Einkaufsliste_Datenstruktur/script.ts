/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
*/

window.addEventListener("load", function (): void {

    let itemContainer: HTMLDivElement = document.getElementById("itemContainer");

    let selectorInput: HTMLElement = document.getElementById("#inputID")as unknown as HTMLElement;
    selectorInput.addEventListener("click", function(): void {
    
        console.log("Hier kann ein Item hinzugefügt werden.");
    });
    
    let selectorAmount: HTMLElement = document.getElementById("#amountID")as unknown as HTMLElement;
    selectorAmount.addEventListener("click", function(): void {
    
        console.log("Hier kann eine Zahlenmenge des Item hinzugefügt werden");
    });
    
    let selectorComment: HTMLTextAreaElement = document.getElementById("#textareaID")as unknown as HTMLTextAreaElement;
    selectorComment.addEventListener("click", function(): void {
    
        console.log("Hier kann ein Kommentar zum Item erstellt werden");
    });
    
    let selectorDate: HTMLTextAreaElement = document.getElementById("#dateID")as unknown as HTMLTextAreaElement;
    selectorDate.addEventListener("click", function(): void {
    
        console.log("Hier kann ein Datum zum Item hinzugefügt werden");
    });

    let selectorButton: HTMLButtonElement = document.getElementById("#btn") as unknown as HTMLButtonElement;
    selectorButton.addEventListener("click", function(): void {
    
        console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");

        let uncheckedCircle: HTMLElement = document.createElement("i");
        uncheckedCircle.classList.add("fa-regular fa-circle");
        itemContainer.appendChild(uncheckedCircle);

        let checkedCircle: HTMLElement = document.createElement("i");
        checkedCircle.classList.add(".hidden");
        itemContainer.appendChild(checkedCircle);

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
        date.classList.add("addedComment");
        date.innerText = selectorDate.value;
        itemContainer.appendChild(date);
        selectorDate.value = "";

        let edit: HTMLElement = document.createElement("i");
        edit.classList.add("fa-solid fa-pen-to-square");
        itemContainer.appendChild(edit);

        let trash: HTMLElement = document.createElement("i");
        edit.classList.add("fa-solid fa-trash-can");
        itemContainer.appendChild(trash);

        let item: HTMLDivElement = document.createElement("div");
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

    let selectorRegularCircle: HTMLElement = document.querySelector(".fa-regular fa-circle")as unknown as HTMLElement;
    selectorRegularCircle.addEventListener("click", function(): void {
    
        console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");
    
    });
    
    let selectorCheckedCircle: HTMLElement = document.querySelector(".fa-regular fa-circle-xmark")as unknown as HTMLElement;
    selectorCheckedCircle.addEventListener("click", function(): void {
    
        console.log("fa-regular fa-circle-xmark erhält die Klasse hidden von fa-regular fa-circle und fa-regular fa-circle ist nun sichtbar");
        
    });
    
    let selectorEdit: HTMLElement = document.getElementById(".fa-solid fa-pen-to-square")as unknown as HTMLElement;
    selectorEdit.addEventListener("click", function(): void {
    
        console.log("Hier können die Eigenschaften der p- Elemente in dem Div bearbeitet werden");
    });
    
    let selectorTrash: HTMLElement = document.querySelector("fa-solid fa-trash-can")as unknown as HTMLElement;
    selectorTrash.addEventListener("click", function(): void {
    
        console.log("Das Div, dem der Trash hinzugehört wird entfernt");
    });
    
    });