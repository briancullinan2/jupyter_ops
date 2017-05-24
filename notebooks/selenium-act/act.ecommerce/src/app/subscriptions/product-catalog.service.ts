import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/zuora/product';
import {Http, Request, Headers} from '@angular/http';
import {environment} from '../../../config/environment';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {SubscriptionPreview} from '../models/zuora/subscription-preview';
import {SubscriptionModel} from './subscription-model';
import {AuthManager} from '../auth/auth.manager';


@Injectable()
export class ProductCatalogService {
    private products: Observable<Product[]>;
    public selectedProduct: ReplaySubject<string> = new ReplaySubject();
    public selectedTerm: ReplaySubject<string> = new ReplaySubject();
    public previewResults: ReplaySubject<SubscriptionPreview> = new ReplaySubject();
    public selectedOptions: ReplaySubject<SubscriptionModel> = new ReplaySubject();
    public recentlyConfirmed: ReplaySubject<boolean> = new ReplaySubject();
    product: string;
    term: string;

    private productCache: Product[] = [
        <Product>{
            type: 'ActPro',
            id: '3',
            name: 'Act! Pro'
        },
        <Product>{
            type: 'ActPremium',
            id: '2',
            name: 'Act! Premium'
        },
        <Product>{
            type: 'ActPremiumCloud',
            id: '1',
            name: 'Act! Premium Cloud'
        },
        <Product>{
            type: 'ActEmarketing',
            id: '4',
            name: 'Act! Emarketing'
        },
        <Product>{
            type: 'HandheldContact',
            id: '5',
            name: 'Handheld Contact'
        },
        <Product>{
            type: 'Support',
            id: '6',
            name: 'Support'
        }
    ];

    public static actProducts(p: Product): boolean {
        return (p.type || '').match(/^(actpro|actpremiumcloud|actpremium)$/ig) !== null;
    }

    constructor(public http: Http, public authManager: AuthManager) {
        this.selectedProduct.next('ActPremium');
        this.selectedProduct.subscribe(p => this.product = p);
        this.selectedTerm.subscribe(p => this.term = p);
        this.products = this.getProducts();
        this.selectedOptions.subscribe((o) => this.updatePreviewPrice(o));
    }

    public getProducts(): Observable<Product[]> {
        return Observable.of(this.productCache);
    }

    private updatePreviewPrice(data: { [key: string]: any }) {
        data['productType'] = this.product;
        data['billingCycle'] = this.term;
        const headers = this.authManager.getHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const body = new URLSearchParams();
        Object.keys(data).forEach(k => body.set(k, (data[k] || '').toString()));
        const req = new Request({
            method: 'POST',
            url: environment.previewUrl,
            headers: headers,
            body: body.toString(),
            withCredentials: false
        });

        this.http.request(req)
            .subscribe(r => this.previewResults.next(r.json()));
    }
}
