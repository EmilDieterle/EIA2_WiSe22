/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/

window.addEventListener("load", function (): void {

let selectorRegularCircle: HTMLElement = document.querySelector(".fa-regular fa-circle")as unknown as HTMLElement;
selectorRegularCircle.addEventListener("click", function(): void {

    console.log("fa-regular fa-circle erhält die Klasse hidden von fa-regular fa-circle-xmark und fa-regular fa-circle-xmark ist nun sichtbar");

});

let selectorCheckedCircle: HTMLElement = document.querySelector(".fa-regular fa-circle-xmark")as unknown as HTMLElement;
selectorCheckedCircle.addEventListener("click", function(): void {

    console.log("fa-regular fa-circle-xmark erhält die Klasse hidden von fa-regular fa-circle und fa-regular fa-circle ist nun sichtbar");
    
});

let selectorButton: HTMLButtonElement = document.getElementById("#btn") as unknown as HTMLButtonElement;
selectorButton.addEventListener("click", function(): void {

    console.log("Es wird mit den eingegebenen Werten vor dem Button ein neues Div erschaffen");
});

let selectorInput: HTMLElement = document.getElementById("#inputID")as unknown as HTMLElement;
selectorInput.addEventListener("click", function(): void {

    console.log("Hier kann ein Item hinzugefügt werden");
});

let selectorAmount: HTMLElement = document.getElementById("#amountID")as unknown as HTMLElement;
selectorAmount.addEventListener("click", function(): void {

    console.log("Hier kann eine Zahlenmenge des Item hinzugefügt werden");
});

let selectorTextarea: HTMLTextAreaElement = document.getElementById("#textareaID")as unknown as HTMLTextAreaElement;
selectorTextarea.addEventListener("click", function(): void {

    console.log("Hier kann ein Kommentar zum Item erstellt werden");
});

let selectorDate: HTMLTextAreaElement = document.getElementById("#dateID")as unknown as HTMLTextAreaElement;
selectorDate.addEventListener("click", function(): void {

    console.log("Hier kann ein Datum zum Item hinzugefügt werden");
});

let selectorEdit: HTMLElement = document.getElementById(".fa-solid fa-pen-to-square")as unknown as HTMLElement;
selectorEdit.addEventListener("click", function(): void {

    console.log("Hier können die Eigenschaften des Items bearbeitet werden");
});

let selectorTrash: HTMLElement = document.querySelector("fa-solid fa-trash-can")as unknown as HTMLElement;
selectorTrash.addEventListener("click", function(): void {

    console.log("Das Div, dem der Trash hinzugehört wird entfernt");
});

});