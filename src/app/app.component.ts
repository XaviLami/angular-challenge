import { Component } from '@angular/core'
import { GameConsole } from './game-console.interface'
import { GameConsoleService } from './services/game-console.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Angular Challenge';
  timesMoreFun = 2 + 2 ;

  gameConsoles: GameConsole[] = this.gameConsoleService.list()
  mostSoldGameConsole: GameConsole
  lessSoldGameConsole: GameConsole

  constructor(private gameConsoleService: GameConsoleService) {}
}
