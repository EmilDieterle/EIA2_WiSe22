/*
Aufgabe: <L03_Einkaufsliste_Formular>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <29.10.2022>
*/

window.addEventListener("load", function (): void {

document.querySelector(".fa-regular fa-circle")?.addEventListener("click", function(): void {

console.log("fa-regular fa-circle ändert sich in fa-regular fa-circle-xmark");

});

document.querySelector(".fa-regular fa-circle-xmark")?.addEventListener("click", function(): void {

    console.log("fa-regular fa-circle-xmark ändert sich in fa-regular fa-circle");
    
    });

document.getElementById("#btn")?.addEventListener("click", function(): void {

    console.log("Ein ListItem wird hinzugefügt");
});

document.querySelector("fa-solid fa-trash-can")?.addEventListener("click", function(): void {
    console.log("Die Liste in der sich die Trash- can befindet, wird entfernt");
});

document.getElementById("#input")?.addEventListener("click", function(): void {

    console.log("Hier kann ein ListItem hinzugefügt werden");
});







});