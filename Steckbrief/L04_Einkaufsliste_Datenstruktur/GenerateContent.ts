namespace L04_Datenstruktur {
    export function generateContent(_data: Data) {
        console.log(_data);
        for (let category in _data) {
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "item":
                    let group: HTMLSelectElement = createSelect(items);
                    break;
            
                default:
                    break;

                }

            let itemContainer: HTMLDivElement | null = document.querySelector("itemContainer#" + category);
            if (itemContainer && group)
                    itemContainer.appendChild(group);

                }
                
            }

    function createSelect(_items: Item[]): HTMLElement | null {
                return null;

            }
        }