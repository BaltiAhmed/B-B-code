import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'

})

export class Product  {

    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(ReactDialog);
        modalRef.componentInstance.name = 'World';
    }

}

@Component({
    selector: 'app-react',
    templateUrl: './dialog/reactjs.component.html'   
})
export class ReactDialog { 
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}
