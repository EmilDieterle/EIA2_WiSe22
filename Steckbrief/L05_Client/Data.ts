namespace L05_Client {

    export interface Item {
        name: string;
        amount: number;
        comment: string;
        date: string;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data {
        item: [
            { name:"Erdbeeren", amount:20.00, comment:"Tortenbeschmückung", date:"29.10.2022" },
            { name:"Milch", amount:4.00, comment:"Milch ist für den Kakao", date:"02.11.2022" }
        ]
    };
}