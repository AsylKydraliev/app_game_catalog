import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';

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
  games: Game[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
    this.gameService.gameChange.subscribe((game:Game[]) => {
      this.games = game;
    });
  }

}
