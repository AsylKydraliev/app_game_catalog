import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent  {
 @ViewChild('inputName')inputName!: ElementRef;
 @ViewChild('inputImage')inputImage!: ElementRef;
 @ViewChild('selectPlatform')select!: ElementRef;
 @ViewChild('textarea')textarea!: ElementRef;

  constructor(private gameService: GameService){}

  createGame(){
   const name = this.inputName.nativeElement.value;
   const image = this.inputImage.nativeElement.value;
   const select = this.select.nativeElement.value;
   const textarea = this.textarea.nativeElement.value;

   const game = new Game(name, image, select, textarea);
   this.gameService.addGame(game);
 }
}
