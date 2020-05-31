export class Item {
    title: string;
    description: string;
    price: number;
    etsy: string;
    type: string;
}

export class FirebaseUserModel {
    image: string;
    name: string;
    provider: string;

    constructor() {
        this.image = '';
        this.name = '';
        this.provider = '';
    }
}
