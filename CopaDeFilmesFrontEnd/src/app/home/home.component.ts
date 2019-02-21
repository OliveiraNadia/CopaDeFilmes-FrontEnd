import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { Filme } from '../models/filme.model';
import { CampeonatoService } from '../services/campeonato.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilmesService]
})
export class HomeComponent implements OnInit {

  constructor(private filmeService: FilmesService,
    private campeonatoService: CampeonatoService,
    private router: Router,
    private toastr: ToastrService) { }

  public filmes: Filme[] = [];
  public totalSelecionado: number = 0;
  public mostrarAguarde: boolean = true;
  public mostrarAguardeCampeonato: boolean =false;

  ngOnInit() {

    this.filmeService.obterFilmes()
    .then((filmes)=>
    {
      this.mostrarAguarde = false;
      this.filmes = filmes;
     
    })
    .catch((error)=>
    {
      this.mostrarAguarde = false;
      console.log(error);
      this.toastr.error('Tivemos um problema ao obter os filmes. Aperte F5 para tentar novamente.', 'Ops...');
    })
  }

  public onClickFilme(indice: number): void{


    if (this.filmes[indice].selecionado == false || this.filmes[indice].selecionado == undefined) {
      if (this.totalSelecionado == 8) {
        this.toastr.warning('Não é possível selecionar mais de 8 filmes.', 'Ops...');
        return;
      }

      this.filmes[indice].selecionado = true;
    }
    else{
      this.filmes[indice].selecionado = false
    }

    this.totalSelecionado = this.obterFilmesSelecionados().length;
  }

  public GerarCampeonato(): void{
    let filmesSelecionados: string[] = this.obterFilmesSelecionados();
    this.mostrarAguardeCampeonato = true;
    this.campeonatoService.obterCampeonato(filmesSelecionados).then((campeonato)=>
    {
      this.campeonatoService.campeonato = campeonato;
      
      this.router.navigate(['/final-campeonato']);
    })
    .catch((error)=>
    {
      this.mostrarAguardeCampeonato = false;
      console.log(error);
      this.toastr.warning('Tivemos um problema ao gerar o campeonato. Clique em gerar campeonato novamente!', 'Ops...');
    })

  }

  private obterFilmesSelecionados(): string[]{
    return this.filmes.filter(x=> x.selecionado == true).map((filme): string=>
    {
      return filme.id;
    });
  }

}
