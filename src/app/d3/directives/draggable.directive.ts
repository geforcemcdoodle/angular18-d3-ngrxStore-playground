import { Directive, Input, ElementRef } from '@angular/core';
import { Node } from '../models/node';
import { ForceDirectedGraph } from '../models/force-directed-graph';
import { D3Service } from '../d3.service';

@Directive({
    selector: '[draggableNode]',
    standalone: true
})
export class DraggableDirective {
    @Input('draggableNode') draggableNode!: Node;
    @Input('draggableInGraph') draggableInGraph!: ForceDirectedGraph;

    constructor(private d3Service: D3Service, private _element: ElementRef) { }

    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    }
}