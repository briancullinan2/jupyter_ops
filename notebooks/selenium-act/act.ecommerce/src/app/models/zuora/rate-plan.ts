import { RatePlanCharge } from './rate-plan-charge';

export class RatePlan {

    type: string;

    subType: string;

    id: string;

    productId: string;

    name: string;

    ratePlanCharges: RatePlanCharge[];

    constructor() {
        this.ratePlanCharges = [];
    }
}


