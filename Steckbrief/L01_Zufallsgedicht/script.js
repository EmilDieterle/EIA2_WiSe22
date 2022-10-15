"use strict";
/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Emil Dieterle>
Matrikel: <271526>
Datum: <13.10.2022>
Quellen: <Mithilfe: Cindy Nguyen>
*/
var L01_Zufallsgedicht;
(function (L01_Zufallsgedicht) {
    window.addEventListener("load", function () {
        let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
        let predicade = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
        let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
        for (let index = subject.length; index >= 1; index--) {
            console.log(getVerse(subject, predicade, object));
        }
        function getVerse(_subject, _predicade, _object) {
            let mathSubject = Math.floor(Math.random() * _subject.length);
            let mathPredicade = Math.floor(Math.random() * _predicade.length);
            let mathObject = Math.floor(Math.random() * _object.length);
            let s = _subject[mathSubject];
            let p = _predicade[mathPredicade];
            let o = _object[mathObject];
            let verse = s + " " + p + " " + o;
            return verse;
        }
    });
})(L01_Zufallsgedicht || (L01_Zufallsgedicht = {}));
//# sourceMappingURL=script.js.map