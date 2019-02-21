import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { Filme } from '../models/filme.model';
import { environment } from '../../environments/environment';

@Injectable()
export class FilmesService {
    constructor(private http: Http){
	}

    public obterFilmes(): Promise<Filme[]> {
		return this.http.get(environment.url_api + 'filme').toPromise()
		.then((resposta: Response) =>
		{
			return resposta.json();
		});
	}
}