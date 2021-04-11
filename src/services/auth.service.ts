import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { API_CONFIG } from "../config/api.config";
import { CredenciasDTO } from "../models/credenciais.dto";


@Injectable()
export class AuhtService {

    constructor(public http: HttpClient){
    }
    
    authenticate(creds : CredenciasDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            } )
    }
}