import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { API_CONFIG } from "../config/api.config";
import { CredenciasDTO } from "../models/credenciais.dto";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";


@Injectable()
export class AuhtService {

    constructor(public http: HttpClient, public storage: StorageService){
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

    successfullogin(authorizationValue : string) {
        let tok = authorizationValue;
        let user : LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}