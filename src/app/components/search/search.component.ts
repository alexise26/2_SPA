import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;
  constructor(private _heroesService:HeroesService,private activatedRoute:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      //console.log(params['termino']);
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx:any){
    this._router.navigate(['/heroe',idx]);
  };

}
