import { RatePlan } from './rate-plan';


export class Product {

    type: string;

    id: string;

    name: string;

    description: string;

    ratePlans: RatePlan[];

    constructor() {
        this.ratePlans = [];
    }
}
