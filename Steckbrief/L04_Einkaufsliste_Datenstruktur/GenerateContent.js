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
                    let group = createSelect(items, category);
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
    function createSelect(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let name = document.createElement("p");
            //
            //
        }
        return null;
    }
})(L04_Datenstruktur || (L04_Datenstruktur = {}));
//# sourceMappingURL=GenerateContent.js.map