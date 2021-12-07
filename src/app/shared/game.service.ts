import { Game } from './game.model';
import { EventEmitter } from '@angular/core';

export class GameService {
  gameChange = new EventEmitter<Game[]>();
  platformsChange = new EventEmitter<string[]>();
  gamesByPlatform: Game[] = [];
  gamesByName!: Game;
  platforms: string[] = [];

  private games: Game[] = [
    new Game('CYBERPUNK 2077', 'https://images7.alphacoders.com/102/thumbbig-1020913.webp',
      'PS4', 'Вы играете за V, наёмника в поисках уникального устройства, ' +
      'позволяющего обрести бессмертие. Вы сможете менять киберимпланты, навыки и стиль игры своего персонажа, ' +
      'исследуя огромный открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает.'),
    new Game('MortalCombat', 'https://images.alphacoders.com/285/thumbbig-285121.webp',
      'PS4', 'Mortal Combat — серия видеоигр в жанре файтинг, ' +
      'созданная Эдом Буном и Джоном Тобиасом. Игры этой серии изначально разрабатывались Midway Games для аркадных ' +
      'автоматов, а впоследствии были перенесены на другие платформы.'),
    new Game('CARS 3', 'https://images2.alphacoders.com/110/thumbbig-1100998.webp',
      'Xbox', ' Project CARS 3 – самый масштабный, увлекательный и аутентичный выпуск знаменитой серии автосимуляторов!'),
    new Game('Call of Duty: WWII', 'https://images.alphacoders.com/829/thumbbig-829955.webp',
      'Xbox', 'Call of Duty: WWII достоверно покажет Вторую мировую войну, ' +
      'представит игровой процесс нового поколения и предложит три режима: «Кампания», ' +
      '«Сетевая игра» и «Совместная игра». События сюжетной кампании развернутся на европейском театре военных действий, ' +
      'где вас ждет абсолютно новая история, а также новые персонажи, вместе с которыми вы пройдете самые знаменитые сражения Второй мировой.'),
    new Game('CS GO', 'https://images7.alphacoders.com/587/thumbbig-587593.webp',
      'PC', 'Многопользовательская компьютерная игра, разработанная компаниями Valve и Hidden Path Entertainment. ... Игроку доступны разные режимы игры, меняющие условия поединка между командами, а также игра с ботами.'),
    new Game('NeedForSpeed', 'https://images5.alphacoders.com/609/thumbbig-609570.webp',
      'PC', 'Многопользовательская компьютерная игра, разработанная компаниями Valve и Hidden Path Entertainment. ... Игроку доступны разные режимы игры, меняющие условия поединка между командами, а также игра с ботами.'),
  ];

  getGames() {
    return this.games.slice();
  }

  getPlatforms() {
    this.games.forEach((game: Game) => {
      let item = this.platforms.some(elem => elem === game.platform);
      if (!item) {
        this.platforms.push(game.platform);
      }
    });
    this.platformsChange.emit(this.platforms);
    return this.platforms;
  }

  getGamesByPlatform(platform: string) {
    this.gamesByPlatform = [];
    this.games.forEach(game => {
      if (platform === game.platform) {
        this.gamesByPlatform.push(game);
      }
    });
    return this.gamesByPlatform;
  }

  getGame(name: string) {
    this.games.forEach(game => {
      if(name === game.name) {
        this.gamesByName = game;
      }
    });
    return this.gamesByName;
  }

  addGame(game: Game) {
    this.games.push(game);
    this.gameChange.emit(this.games);
  }
}
