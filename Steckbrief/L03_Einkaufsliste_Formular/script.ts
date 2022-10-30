/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/

window.addEventListener("load", function (): void {

let selectorRegularCircle: HTMLElement = document.querySelector(".fa-regular fa-circle")as unknown as HTMLElement;
selectorRegularCircle.addEventListener("click", function(): void {

    console.log("fa-regular fa-circle ändert sich in fa-regular fa-circle-xmark. Ein Datum wird ausgegeben über dem Kauf");

});

let selectorCheckedCircle: HTMLElement = document.querySelector(".fa-regular fa-circle-xmark")as unknown as HTMLElement;
selectorCheckedCircle.addEventListener("click", function(): void {

    console.log("fa-regular fa-circle-xmark ändert sich in fa-regular fa-circle");
    
    });

let selectorButton: HTMLButtonElement = document.getElementById("#btn") as unknown as HTMLButtonElement;
selectorButton.addEventListener("click", function(): void {

    console.log("Ein ListItem wird hinzugefügt");
});

let selectorTrash: HTMLElement = document.querySelector("fa-solid fa-trash-can")as unknown as HTMLElement;
selectorTrash.addEventListener("click", function(): void {
    console.log("Die Liste in der sich die Trash- can befindet, wird entfernt");
});

let selectorInput: HTMLElement = document.getElementById("#input")as unknown as HTMLElement;
selectorInput.addEventListener("click", function(): void {

    console.log("Hier kann ein ListItem hinzugefügt werden");
});

let selectorAmount1: HTMLElement = document.getElementById("#amount1")as unknown as HTMLElement;
selectorAmount1.addEventListener("click", function(): void {

    console.log("Hier wird die Anzahl der Bananen angegeben in Liste 1");
});

let selectorAmount2: HTMLElement = document.getElementById("#amount2") as unknown as HTMLElement;
selectorAmount2.addEventListener("click", function(): void {

    console.log("Hier wird die Anzahl der Äpfel angegeben in Liste 2");
});

let selectorText1: HTMLTextAreaElement = document.getElementById("#textarea1")as unknown as HTMLTextAreaElement;
selectorText1.addEventListener("click", function(): void {

    console.log("Hier kann ein Kommentar zu Liste 1 erstellt werden");
});

let selectorText2: HTMLTextAreaElement = document.getElementById("#textarea2") as unknown as HTMLTextAreaElement;
selectorText2.addEventListener("click", function(): void {

    console.log("Hier kann ein Kommentar zu Liste 2 erstellt werden");
});

});