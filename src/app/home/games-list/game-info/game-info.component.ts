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
  games!: Game[];
  platform!: string;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(){
    this.gameService.gameChange.subscribe((game: Game[]) => {
      this.games = game;
    });
    this.route.params.subscribe((params: Params) => {
      this.platform = params['platform'];
      this.games = this.gameService.getGamesByPlatform(this.platform);
    })
  }
}
