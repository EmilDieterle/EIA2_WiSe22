namespace L05_Client {
    export function generateContent(_data: Data) {
        console.log(_data);
        for (let category in _data) {
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "item":
                    let group: HTMLSelectElement = createSelect(items, category);
                    break;
            
                default:
                    break;

                }

            let itemContainer: HTMLDivElement | null = document.querySelector("itemContainer#" + category);
            if (itemContainer && group)
                    itemContainer.appendChild(group);

                }
                
            }

    function createSelect(_items: Item[] _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let name: HTMLElement = document.createElement("p");
            //
            //
        }
        return null;

            }
        }