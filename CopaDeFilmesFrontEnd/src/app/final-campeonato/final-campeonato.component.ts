import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from '../services/campeonato.service';
import { Campeonato } from '../models/campeonato.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-campeonato',
  templateUrl: './final-campeonato.component.html',
  styleUrls: ['./final-campeonato.component.css']
})
export class FinalCampeonatoComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService,
    private router: Router) { }

  public campeonato: Campeonato = {} as Campeonato;
  ngOnInit() {

    if (this.campeonatoService.campeonato.campeao == undefined) {
      this.router.navigate(['/']);
    }
    
    this.campeonato = this.campeonatoService.campeonato;
  }

  public onClickVoltar(){
    this.campeonatoService.resetar();
    this.router.navigate(['/']);
  }
}
