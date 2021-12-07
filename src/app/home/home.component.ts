import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() platform!: string;
  platforms!: string[];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.platforms = this.gameService.getPlatforms();
    this.gameService.platformsChange.subscribe((platform: string[]) => {
      this.platforms = platform;
    });
  }
}
