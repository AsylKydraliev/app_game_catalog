import { Component, OnInit } from '@angular/core';
import { Game } from '../../../shared/game.model';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../../../shared/game.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit{
  name!: string;
  image!: string;
  game!: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const gameId = parseInt(params['id']);
      if(this.game) {
        this.name = this.gameService.getGame(gameId).name;
        this.image = this.gameService.getGame(gameId).image;
      }
    })
  }
}
