namespace L01_Zufallsgedicht {

    window.addEventListener("load", function() {

let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let predicade: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

console.log(subject);
console.log(predicade);
console.log(object);


for (let index: number = 5; index <= subject.length; index--) {
    //if (index == 0) {
      //  index = 1;
   // }
    console.log(subject[index]);
    
}


});

}