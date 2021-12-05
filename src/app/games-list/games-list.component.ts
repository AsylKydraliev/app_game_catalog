import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/game.model';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit{
  games!: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit(){
    this.games = this.gameService.getGames();
    this.gameService.gameChange.subscribe((games: Game[]) => {
      this.games = games;
    });
  }
}
