/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/

window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

    let itemContainer: HTMLDivElement = document.querySelector("#itemContainer") as HTMLDivElement;
    //Hier kann ein Item hinzugefügt werden
    let selectorInput: HTMLElement = document.querySelector("#inputID") as HTMLElement;
    //Hier kann eine Zahlenmenge des Item hinzugefügt werden
    let selectorAmount: HTMLElement = document.querySelector("#amountID") as HTMLElement;
    //Hier kann ein Kommentar zum Item erstellt werden
    let selectorComment: HTMLTextAreaElement = document.querySelector("#commentID") as HTMLTextAreaElement;
    //Hier kann ein Datum zum Item hinzugefügt werden
    let selectorDate: HTMLElement = document.querySelector("#dateID") as HTMLElement;
    let selectorButton: HTMLButtonElement = document.querySelector("#btn") as HTMLButtonElement;
    //Elemente, die nach der dem addItem- Event erstellt werden
    let uncheckedCircle: NodeList = document.querySelectorAll("#itemContainer .addedDiv .fa-regular fa-circle");
    for (let x: number = 0; x < uncheckedCircle.length; x++) {
        uncheckedCircle[x].addEventListener("click", clickCircle, false);
}
    let trash: NodeList = document.querySelectorAll(".fa-solid fa-trash-can");
    let edit: NodeList = document.querySelectorAll(".fa-solid fa-pen-to-square");

    selectorButton.addEventListener("click", addItem);
    //uncheckedCircle.addEventListener("click", clickCircle);
    //trash.addEventListener("click", deleteItem);
    //edit.addEventListener("click", editItem);

}

function addItem(): void {
        console.log("Ein neues Div wird erschaffen. Die vorher eingegebenen Werte werden als <p> zu Kindern");
}

function clickCircle(): void {
        console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar. Falls fa-regular fa-circle-xmark schon da ist, bekommt es die Klasse .hidden");
}

function deleteItem(): void {  
        console.log("Der ItemContainer entfernt das item Kind durch den Click des <i> trash Elements");
}

function editItem(): void {
        console.log("Die <p> Elemente können bearbeitet werden");
}