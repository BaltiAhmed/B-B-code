import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'

})

export class Product  {
    

    constructor(private modalService: NgbModal) {}
    openR() {
        const modalRef = this.modalService.open(ReactDialog);
        modalRef.componentInstance.name = 'World';
    }

    openA() {
        const modalRef = this.modalService.open(AngulartDialog);
        modalRef.componentInstance.name = 'World';
    }

    openB() {
        const modalRef = this.modalService.open(BackEndtDialog);
        modalRef.componentInstance.name = 'World';
    }

    openPFE() {
        const modalRef = this.modalService.open(PfetDialog);
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

@Component({
    selector: 'app-angular',
    templateUrl: './dialog/angular.component.html'   
})
export class AngulartDialog { 
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-backEnd',
    templateUrl: './dialog/backEnd.component.html'   
})
export class BackEndtDialog { 
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-pfe',
    templateUrl: './dialog/pfe.component.html'   
})
export class PfetDialog { 
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}