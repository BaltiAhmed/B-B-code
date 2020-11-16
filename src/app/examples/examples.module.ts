import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input'
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { Inscription } from './landing/inscription/inscription.component';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog'
import {Product} from './landing/product/product.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        MatDialogModule
        
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        Inscription,
        Product
        
    ]
})
export class ExamplesModule { }
