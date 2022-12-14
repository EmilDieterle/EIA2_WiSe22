/*
Aufgabe: <L06_DatabaseServer>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <19.10.2022>
*/

namespace L06_DatabaseServer {

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

            selectorButton.addEventListener("click", sendItem);

            interface FormDataJSON {
                [key: string]: FormDataEntryValue | FormDataEntryValue[];
              }
              
            let formData: FormData = new FormData(form);
            let json: FormDataJSON = {};
              
            for (let key of formData.keys())
                if (!json[key]) {
                  let values: FormDataEntryValue[] = formData.getAll(key);
                  json[key] = values.length > 1 ? values : values[0];
                }

            let query: URLSearchParams = new URLSearchParams();
            query.set("command", "insert");
            query.set("collection", "Orders");
            query.set("data", JSON.stringify(json));

            async function sendItem(_event: Event): Promise<void> {
                console.log("sendItem");
                let formData: formData = new FormData(form);
                let query: URLSearchParams = new URLSearchParams(<any>formData);
                await fetch("index.html" + query.toString());
                console.log("Item sent");

            }
    
            selectorButton.addEventListener("click", function(): void {
    
            let check: HTMLInputElement = document.createElement("input");
            check.type = "checkbox";
            check.classList.add("check");
            itemContainer.appendChild(check);
    
            let name: HTMLLabelElement = document.createElement("label");
            name.classList.add("addedItem");
            name.innerText = selectorInput.value;
            itemContainer.appendChild(name);
            selectorInput.value = "";
    
            let amount: HTMLLabelElement = document.createElement("label");
            amount.classList.add("addedAmount");
            amount.innerText = selectorAmount.value;
            itemContainer.appendChild(amount);
            selectorAmount.value = "";
    
            let comment: HTMLLabelElement = document.createElement("label");
            comment.classList.add("addedComment");
            comment.innerText = selectorComment.value;
            itemContainer.appendChild(comment);
            selectorComment.value = "";
    
            let date: HTMLLabelElement = document.createElement("label");
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

                let done: HTMLElement = document.createElement("i");
                done.classList.add("fa-solid", "fa-circle-check");
                item.appendChild(done);

                done.addEventListener("click", endEditable);

                function endEditable(): void {
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

}