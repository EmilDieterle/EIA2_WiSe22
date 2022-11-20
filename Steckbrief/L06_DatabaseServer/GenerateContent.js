"use strict";
var L06_DatabaseServer;
(function (L06_DatabaseServer) {
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
    L06_DatabaseServer.generateContent = generateContent;
    function createSelect(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let name = document.createElement("p");
            //
            //
        }
        return null;
    }
})(L06_DatabaseServer || (L06_DatabaseServer = {}));
//# sourceMappingURL=GenerateContent.js.map