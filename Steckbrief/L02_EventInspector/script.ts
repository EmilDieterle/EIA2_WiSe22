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
        
        let div0: HTMLElement = <HTMLElement>document.querySelector("#div0");
        div0.addEventlistener("click", placeSpan);
        document.addEventListener("keydown", chooseSpan);


    }


}