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
  game!: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const name = params['name'];
      this.game = this.gameService.getGame(name);
      if(this.game) {
        this.name = this.gameService.getGame(name).name;
        this.image = this.gameService.getGame(name).image;
        this.platform = this.gameService.getGame(name).platform;
        this.description = this.gameService.getGame(name).description;
      }
    })
  }
}
