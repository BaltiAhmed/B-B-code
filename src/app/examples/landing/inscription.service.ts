import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { InscriptionData } from './inscription-data.model'

import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class InscriptionService {

    private messageid = null

    private inscriptionStatus = new Subject<string>()

    constructor(private http: HttpClient) { }

    addInscription(nom: string, prenom: string, email: string, tel: string, programme: string, site: string) {

        const inscriptionData: InscriptionData = { nom: nom, prenom: prenom, email: email, tel: tel, programme: programme, site: site }

        this.http.post<{ message: String, Inscription: any }>("http://localhost:5000/api/inscription", inscriptionData)
            .subscribe(response => {
                console.log(response.message)
               
                this.messageid = response.message
                this.inscriptionStatus.next(this.messageid)

            })


    }

    getMessage() {
        return this.messageid
    }

    getinscriptionStatus() {
        return this.inscriptionStatus.asObservable()
    }

}