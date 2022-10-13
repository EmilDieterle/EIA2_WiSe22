namespace L01_Zufallsgedicht {

    window.addEventListener("load", function () {

        let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
        let predicade: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
        let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

        //console.log(subject);
        //console.log(predicade);
        //console.log(object);


        for (let index: number = subject.length; index >= 1; index--) {
            console.log(index);
            console.log(getVerse(subject, predicade, object));
            

        }

        function getVerse(_subject: string[], _predicade: string[], _object: string[]): string {
            //return "A";
            let variable: string = "";
            let mathSubject: number = Math.floor(Math.random() * subject.length);
            let mathPredicade: number = Math.floor(Math.random() * predicade.length);
            let mathObject: number = Math.floor(Math.random() * object.length);

            console.log(mathSubject);
            console.log(mathPredicade);
            console.log(mathObject);



        }

    });

}