import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { InscriptionData } from './inscription-data.model'

import { Subject } from 'rxjs';
import 'rxjs/add/operator/catch';


@Injectable({ providedIn: 'root' })
export class InscriptionService {

    private messageid = null
    private errorMessage = null

    private inscriptionStatus = new Subject<string>()
    private errorMessageStatus = new Subject<string>()

    constructor(private http: HttpClient) { }

    addInscription(nom: string, prenom: string, email: string, tel: string, programme: string, site: string) {

        const inscriptionData: InscriptionData = { nom: nom, prenom: prenom, email: email, tel: tel, programme: programme, site: site }

        this.http.post<{ message: String, Inscription: any }>("https://bandbcode.herokuapp.com/api/inscription", inscriptionData)
            .subscribe(response => {
                this.messageid = response.message
                this.inscriptionStatus.next(this.messageid)
            },

                error => {
                    console.log(error.statusText)
                    this.errorMessage = error.error.message
                    this.errorMessageStatus.next(this.errorMessage)
                }
            )


    }



    getMessage() {
        return {
            message:this.messageid,
            error:this.errorMessage
        }
    }

    getinscriptionStatus() {
        return {
            message: this.inscriptionStatus.asObservable(),
            error: this.errorMessageStatus.asObservable()
        }
    }

}