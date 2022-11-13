"use strict";
var L05_Client;
(function (L05_Client) {
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
    L05_Client.generateContent = generateContent;
    function createSelect(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let name = document.createElement("p");
            //
            //
        }
        return null;
    }
})(L05_Client || (L05_Client = {}));
//# sourceMappingURL=GenerateContent.js.map