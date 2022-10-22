/*
Aufgabe: <L02_EventListener>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <.10.2022>
Quellen: <>
*/

namespace L02_EventInspector {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.addEventListener("click", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        let div0: HTMLElement = <HTMLElement>document.querySelector("#div0");
        div0.addEventListener("click", setInfoBox);
        document.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);

        let div1: HTMLElement = <HTMLElement>document.querySelector("#div1");
        div1.addEventListener("click", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        body.addEventListener("click", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
}

function setInfoBox(_event: MouseEvent): void {

    let target: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

    let x: string = _event.clientX + 10 + "px";
    let y: string = _event.clientY + 10 + "px";

    target.innerHTML = x + " " + y + " " + _event.target;

    target.style.top = y;
    target.style.left = x;

}

function logInfo(_event: Event): void {

    console.log(_event);
}

let buttonEvent: CustomEvent = new CustomEvent("click", {bubbles: true, detail: {number: 4}});
document.querySelector("#btn").dispatchEvent(buttonEvent);
console.log(buttonEvent);