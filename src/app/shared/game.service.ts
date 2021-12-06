import { Game } from './game.model';
import { EventEmitter } from '@angular/core';

export class GameService{
  gameChange = new EventEmitter<Game[]>();
  gamesByPlatform: Game[] = [];
  platforms: string[] = [];

  private games: Game[] = [
      new Game('CYBERPUNK 2077', 'https://images7.alphacoders.com/102/thumbbig-1020913.webp',
    ' PLAYSTATION 4', 'Вы играете за V, наёмника в поисках уникального устройства, ' +
      'позволяющего обрести бессмертие. Вы сможете менять киберимпланты, навыки и стиль игры своего персонажа, ' +
      'исследуя огромный открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает.'),
    new Game('CARS 3', 'https://images2.alphacoders.com/108/thumb-1920-1085746.jpg',
      'Xbox', ' Project CARS 3 – самый масштабный, увлекательный и аутентичный выпуск знаменитой серии автосимуляторов!'),
    new Game('Call of Duty: WWII', 'https://images.alphacoders.com/829/thumbbig-829955.webp',
      'PC', 'Call of Duty: WWII достоверно покажет Вторую мировую войну, ' +
      'представит игровой процесс нового поколения и предложит три режима: «Кампания», ' +
      '«Сетевая игра» и «Совместная игра». События сюжетной кампании развернутся на европейском театре военных действий, ' +
      'где вас ждет абсолютно новая история, а также новые персонажи, вместе с которыми вы пройдете самые знаменитые сражения Второй мировой.')
  ];

  getGames(){
    return this.games.slice();
  }

  getPlatforms(){
    this.games.forEach(game => {
      this.platforms.push(game.platform);
    })
    return this.platforms;
  }

  getGamesByPlatform(platform: string){
    this.games.forEach(game => {
      if(platform === game.platform) {
        this.gamesByPlatform.push(game);
      }
      return this.gamesByPlatform;
    });
  }

  getGame(index: number){
    return this.games[index];
  }

  addGame(game: Game){
    this.games.push(game);
    this.gameChange.emit(this.games);
  }
}
