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

  constructor(private gameConsoleService: GameConsoleService) {
    var difVentePlay = (this.gameConsoles[0].sales2018) - this.gameConsoles[0].sales2017
    var difVenteXbox = (this.gameConsoles[1].sales2018) - this.gameConsoles[1].sales2017
    var difVenteSwitch = (this.gameConsoles[2].sales2018) - this.gameConsoles[2].sales2017
    console.log(difVentePlay)
    console.log(difVenteXbox)
    console.log(difVenteSwitch)
    if(difVentePlay > (difVenteXbox || difVenteSwitch)){
      var plusGrand = this.gameConsoles[0].name
      console.log(plusGrand)
    } else if (difVenteXbox > (difVentePlay || difVenteSwitch)){
      var plusGrand = this.gameConsoles[1].name 
      console.log(plusGrand)
    } else if (difVenteSwitch > (difVentePlay || difVenteXbox)) {
      var  plusGrand = this.gameConsoles[2].name
      console.log(plusGrand)
    }
  }
}
