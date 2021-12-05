import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../shared/game.model';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  @Input() game!: Game;

  ngOnInit(): void {

  }

}
