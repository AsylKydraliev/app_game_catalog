import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/game.model';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games!: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit(){
    this.games = this.gameService.getGames();
    this.gameService.gameChange.subscribe((games: Game[]) => {
      this.games = games;
    });
  }
}
