"use strict";
var L01_Zufallsgedicht;
(function (L01_Zufallsgedicht) {
    window.addEventListener("load", function () {
        let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
        let predicade = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
        let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
        console.log(subject);
        console.log(predicade);
        console.log(object);
        for (let index = 6; index <= subject.length; index--) {
            if (index == 0) {
                break;
            }
            console.log(index);
        }
        function getVerse(subject, predicade, object) {
            console.log(subject + predicade + object);
        }
        getVerse(subject, "a", predicade, "b", object, "c");
    });
})(L01_Zufallsgedicht || (L01_Zufallsgedicht = {}));
//# sourceMappingURL=script.js.map