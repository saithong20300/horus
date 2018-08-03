import {Directive, ElementRef, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
    selector: '[numbersOnly]'
})
export class NumbersOnlyDirective implements OnChanges {

    @Input() numbersOnly: any;

    constructor(private el: ElementRef) {} 
 
    @HostListener('keydown', ['$event']) 
    keyDownEvent(event: KeyboardEvent) {
        // Add other conditions if need to allow ctr+c || ctr+v
        
        if (event.key.length === 1 && (event.which < 48 && event.which > 57)) {
            event.preventDefault();
        }
    }

    ngOnChanges(ngOnChanges) {
        if (ngOnChanges.numbersOnly) {
            this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^0-9]/g, '');
        }
    }

}