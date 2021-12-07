import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';
import { Game } from '../../shared/game.model';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
})
export class AllGamesComponent implements OnInit{
  games: Game[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit(){
    this.games = this.gameService.getGames();
    this.gameService.gameChange.subscribe((games: Game[]) => {
      this.games = games;
    });
  }
}
