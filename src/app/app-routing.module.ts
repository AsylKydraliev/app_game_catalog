import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { GamesListComponent } from './home/games-list/games-list.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { EmptyGameComponent } from './home/empty-game.component';
import { NotFoundComponent } from './not-found.component';
import { GameInfoComponent } from './home/games-list/game-info/game-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: EmptyGameComponent},
      {path: 'gameList', component: GamesListComponent},
      {path: ':id', component: GameInfoComponent, children: [
          {path: ':id', component: GameComponent},
        ]},
    ]},
  {path: 'platform', component: PlatformComponent},
  {path: 'createGame', component: CreateGameComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
