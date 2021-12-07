import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AllGamesComponent } from './home/all-games/all-games.component';
import { NotFoundComponent } from './not-found.component';
import { GameInfoComponent } from './home/games-list/game-info/game-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: AllGamesComponent},
      {path: 'createGame', component: CreateGameComponent},
      {path: ':platform', component: GameInfoComponent},
      {path: ':platform/:name', component: GameComponent},
    ]},
  {path: 'platform', component: PlatformComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
