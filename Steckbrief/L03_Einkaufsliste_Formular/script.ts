/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/

window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

    let itemContainer: HTMLDivElement = document.getElementById("#itemContainer") as HTMLDivElement;
    //Hier kann ein Item hinzugefügt werden
    let selectorInput: HTMLElement = document.getElementById("#inputID") as HTMLElement;
    //Hier kann eine Zahlenmenge des Item hinzugefügt werden
    let selectorAmount: HTMLElement = document.getElementById("#amountID") as HTMLElement;
    //Hier kann ein Kommentar zum Item erstellt werden
    let selectorComment: HTMLTextAreaElement = document.getElementById("#commentID") as HTMLTextAreaElement;
    //Hier kann ein Datum zum Item hinzugefügt werden
    let selectorDate: HTMLElement = document.getElementById("#dateID") as HTMLElement;
    let selectorButton: HTMLButtonElement = document.getElementById("#btn") as HTMLButtonElement;
    //Elemente, die nach der dem addItem- Event erstellt werden
    let uncheckedCircle: HTMLElement = document.querySelector("fa-regular fa-circle") as HTMLElement;
    let trash: HTMLElement = document.querySelector("fa-solid fa-trash-can") as HTMLElement;
    let edit: HTMLElement = document.querySelector("fa-solid fa-pen-to-square") as HTMLElement;

    selectorButton.addEventListener("click", addItem);
    uncheckedCircle.addEventListener("click", circleChecked);
    trash.addEventListener("click", deleteItem);
    edit.addEventListener("click", editItem);

}

function addItem(): void {
        console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
    }

function circleChecked(): void {
    console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar. Falls fa-regular fa-circle-xmark schon da ist, bekommt es die Klasse .hidden");
}

function deleteItem(): void {  
        console.log("Der ItemContainer entfernt das item Kind durch den Click des <i> trash Elements");
}

function editItem(): void {
        console.log("Die Paragraphen werden als Kinder entfernt und durch die obrigen, passenden Text/- und Inputfelder ersetzt. Die davorigen Eingaben bleiben erhalten; Die Felder kann man wieder bearbeiten und durch einen neuen Button eingeben");
}