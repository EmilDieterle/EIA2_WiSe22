"use strict";
var L04_Datenstruktur;
(function (L04_Datenstruktur) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "item":
                    let group = createSelect(items);
                    break;
                default:
                    break;
            }
            let itemContainer = document.querySelector("itemContainer#" + category);
            if (itemContainer && group)
                itemContainer.appendChild(group);
        }
    }
    L04_Datenstruktur.generateContent = generateContent;
    function createSelect(_items) {
        return null;
    }
})(L04_Datenstruktur || (L04_Datenstruktur = {}));
//# sourceMappingURL=GenerateContent.js.map