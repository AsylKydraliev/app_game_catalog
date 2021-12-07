import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  name = '';
  image = '';
  platform = '';
  description = '';
  games!: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const gameId = parseInt(params['id']);
      this.games = this.gameService.getGame(gameId);
      if(this.games) {
        this.name = this.gameService.getGame(gameId).name;
        this.image = this.gameService.getGame(gameId).image;
        this.platform = this.gameService.getGame(gameId).platform;
        this.description = this.gameService.getGame(gameId).description;
      }
    })
  }
}
