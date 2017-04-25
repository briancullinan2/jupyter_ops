// imports

import {Directive, ElementRef, Renderer} from '@angular/core';


@Directive({
    selector: '[class*="mat-toolbar"], bc-app, bc-footer, md-card, [md-raised-button], [md-button], md-sidenav, .mat-raised-button, form, input, textarea, table, button, select, optgroup, option'
})

export class WireDirective {

    constructor(private _renderer: Renderer,
                private _elementRef: ElementRef) {
        this.addClass('wf-top', this._elementRef.nativeElement);
        this.addClass('wf-bottom', this._elementRef.nativeElement);
        this.addClass('wf-left', this._elementRef.nativeElement);
        this.addClass('wf-right', this._elementRef.nativeElement);
    }

    addClass(className: string, element: any) {
        this._renderer.setElementClass(element, className, true);
        // or use the host element directly
        // this._renderer.setElementClass(this._elementRef.nativeElement, className, true);
    }

    removeClass(className: string, element: any) {
        this._renderer.setElementClass(element, className, false);
    }

}