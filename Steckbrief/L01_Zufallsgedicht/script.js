"use strict";
var L01_Zufallsgedicht;
(function (L01_Zufallsgedicht) {
    window.addEventListener("load", function () {
        let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
        let predicade = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
        let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
        //console.log(subject);
        //console.log(predicade);
        //console.log(object);
        for (let index = subject.length; index >= 1; index--) {
            console.log(index);
            console.log(getVerse(subject, predicade, object));
        }
        function getVerse(_subject, _predicade, _object) {
            //return "A";
            let variable = "";
            let mathSubject = Math.floor(Math.random() * subject.length);
            let mathPredicade = Math.floor(Math.random() * predicade.length);
            let mathObject = Math.floor(Math.random() * object.length);
            console.log(mathSubject);
            console.log(mathPredicade);
            console.log(mathObject);
        }
    });
})(L01_Zufallsgedicht || (L01_Zufallsgedicht = {}));
//# sourceMappingURL=script.js.map