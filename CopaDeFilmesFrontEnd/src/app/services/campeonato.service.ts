import { Campeonato } from "../models/campeonato.model";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class CampeonatoService {

    constructor(private http: Http){
    }
    
    public campeonato: Campeonato = {} as Campeonato;

    public obterCampeonato(idsFilmes: string[]): Promise<Campeonato> {
        let headers: Headers = new Headers();
        headers.append('Content-type', 'application/json');
		return this.http.post(environment.url_api + 'campeonato', idsFilmes, new RequestOptions({headers: headers})).toPromise()
		.then((resposta: Response) =>
		{
			return resposta.json();
		});
    }
    
    public resetar(){
        this.campeonato = {} as Campeonato;
    }
}