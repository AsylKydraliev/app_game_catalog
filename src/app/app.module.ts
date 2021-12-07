import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { PlatformComponent } from './platform/platform.component';
import { GameInfoComponent } from './home/games-list/game-info/game-info.component';
import { GamesListComponent } from './home/games-list/games-list.component';
import { GameService } from './shared/game.service';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AllGamesComponent } from './home/all-games/all-games.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    PlatformComponent,
    GameInfoComponent,
    GamesListComponent,
    ToolbarComponent,
    HomeComponent,
    GameComponent,
    AllGamesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
