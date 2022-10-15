/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <13.10.2022>
Quellen: <Mithilfe: Cindy Nguyen>
*/

namespace L01_Zufallsgedicht {

    window.addEventListener("load", function () {

        let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
        let predicade: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
        let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

        for (let index: number = subject.length; index >= 1; index--) {
            console.log(getVerse(subject, predicade, object));
            
        }

        function getVerse(_subject: string[], _predicade: string[], _object: string[]): string {
    
            let mathSubject: number = Math.floor(Math.random() * _subject.length);
            let mathPredicade: number = Math.floor(Math.random() * _predicade.length);
            let mathObject: number = Math.floor(Math.random() * _object.length);

            let s: string = _subject[mathSubject];
            let p: string = _predicade[mathPredicade];
            let o: string = _object[mathObject];
            
            let verse: string = s + " " + p + " " + o;

            return verse;

        }

    });

}