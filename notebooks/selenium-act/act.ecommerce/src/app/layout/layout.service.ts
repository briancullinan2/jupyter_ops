import {ElementRef, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class LayoutService {

    sidebarOpen: Observable<boolean>;
    focusElement: ReplaySubject<ElementRef | null> = new ReplaySubject();

}
