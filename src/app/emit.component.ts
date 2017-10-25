import {Component, EventEmitter, Input , Output} from '@angular/core';


@Component({
    selector : 'emit-component',
    template : `
        <div>
            <span>Ini Contoh EventEmitter</span><br/>
            <button (click) = "doResize()" >Do Resize to 10px</button>
        </div>
    `
})
export class EmitComponent {
    @Input()
    size : number;

    @Output()
    eventEmitter = new EventEmitter<number>();


    doResize(){
        this.size = 10;
        this.eventEmitter.emit(this.size);
    }
}