/*
Aufgabe: <L05_Client>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <12.10.2022>
*/

namespace L05_Client {

    window.addEventListener("load", handleLoad);
    
    async function handleLoad(_event: Event): Promise <void> {

            let response: Response = await fetch("Data.json");
            let offer: string = await response.text();
            let data: Data = JSON.parse(offer);
    
            function generateContent(data);
    
            let itemContainer: HTMLDivElement = document.querySelector("#itemContainer") as unknown as HTMLDivElement;
            let selectorInput: HTMLElement = document.querySelector("#inputID")as HTMLElement;
            let selectorAmount: HTMLElement = document.querySelector("#amountID")as HTMLElement;
            let selectorComment: HTMLTextAreaElement = document.querySelector("#commentID") as HTMLTextAreaElement;
            let selectorDate: HTMLElement = document.querySelector("#dateID") as HTMLElement;
            let selectorButton: HTMLButtonElement = document.querySelector("#btn") as HTMLButtonElement;
    
            let item:NodeListOf<HTMLElement> = document.querySelectorAll(".addedDiv") as NodeListOf<HTMLElement>;
            let name: NodeListOf<HTMLElement> = document.querySelectorAll(".addedItem") as NodeListOf<HTMLElement>;
            let amount: NodeListOf<HTMLElement> = document.querySelectorAll(".addedAmount") as NodeListOf<HTMLElement>;
            let comment: NodeListOf<HTMLElement> = document.querySelectorAll(".addedComment") as NodeListOf<HTMLElement>;
            let date: NodeListOf<HTMLElement> = document.querySelectorAll(".addedDate") as NodeListOf<HTMLElement>;
            let formData: formData = new FormData(form);

            selectorButton.addEventListener("click", sendItem);

            async function sendItem(_event: Event): Promise<void> {
                console.log("sendItem");
                let formData: formData = new FormData(form);
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                await fetch("L05_Client.html?" + query.toString());
                alert("Item sent");

            }
    
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
    
            function deleteItem(): void {
            itemContainer.removeChild(item);
        }
        
            function editItem(): void {
                    console.log("edit- Funktion ist klickbar");
                    name.contentEditable = true;
                    amount.contentEditable = true;
                    comment.contentEditable = true;
                    date.contentEditable = true;
    
    }
    
    });
    
    }
    
    }
    