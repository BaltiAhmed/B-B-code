import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../inscription.service'

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class Inscription implements OnInit {

  programmes = [
    'développement front end react js',
    'développement front end angular js',
    'développement back end nodejs,express js et mongoDB ',
    'encadrement PFE '
  ]

  sites = [
    'Jandouba',
    'Beja'
  ]

  form: FormGroup;

  Message = null
  private authListenerSubs: Subscription

  constructor(public InscriptionService: InscriptionService) { }

  ngOnInit() {

    this.Message = this.InscriptionService.getMessage()
    this.authListenerSubs = this.InscriptionService.getinscriptionStatus()
      .subscribe(isAuth => {
        this.Message = isAuth
      })

    this.form = new FormGroup({
      'nom': new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      'prenom': new FormControl(null, { validators: [Validators.required] }),
      'tel': new FormControl(null, { validators: [Validators.required] }),
      'email': new FormControl(null, { validators: [Validators.required] }),
      'programme': new FormControl(null, { validators: [Validators.required] }),
      'site': new FormControl(null, { validators: [Validators.required] })
    })

  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe()
  }

  onSignup() {
    this.InscriptionService.addInscription(
      this.form.value.nom,
      this.form.value.prenom,
      this.form.value.email,
      this.form.value.tel,
      this.form.value.programme,
      this.form.value.site
    )
    this.form.reset()
  }

}
