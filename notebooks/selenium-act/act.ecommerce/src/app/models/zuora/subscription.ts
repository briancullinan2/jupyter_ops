import { RatePlan } from './rate-plan';

export class Subscription {

    id: string;

    termType: string;

    accountName: string;

    status: number;

    ratePlans: RatePlan[];

    constructor() {
        this.ratePlans = [];
    }
}
