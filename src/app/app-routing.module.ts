import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameInfoComponent } from './games-list/game-info/game-info.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'platform', component: PlatformComponent},
  {path: 'gameList', component: GamesListComponent, children: [
      {path: 'gameInfo', component: GameInfoComponent}
    ]},
  {path: 'createGame', component: CreateGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
