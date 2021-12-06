import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit{
  @Input() platform!: string;
  @Input() index!: number;

  constructor(private gameService: GameService) {}

  ngOnInit(){
    this.gameService.getGamesByPlatform(this.platform);
  }
}
