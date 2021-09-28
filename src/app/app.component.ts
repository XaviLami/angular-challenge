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

    // Compare les dif de vente de chaque console par année
    var difVentePlay = (this.gameConsoles[0].sales2018) - this.gameConsoles[0].sales2017;
    var difVenteXbox = (this.gameConsoles[1].sales2018) - this.gameConsoles[1].sales2017;
    var difVenteSwitch = (this.gameConsoles[2].sales2018) - this.gameConsoles[2].sales2017;
    //Test des variables
    console.log(difVentePlay)
    console.log(difVenteXbox)
    console.log(difVenteSwitch)

    // Compare la diff et affiche le nom de la console avec le plus grand écart
    var plusGrand =''
    if(difVentePlay > difVenteXbox || difVentePlay > difVenteSwitch){
      var plusGrand = this.gameConsoles[0].name
      console.log(plusGrand)
    } else if (difVenteXbox > difVentePlay || difVenteXbox > difVenteSwitch){
      var plusGrand = this.gameConsoles[1].name 
      console.log(plusGrand)
    } else if (difVenteSwitch > difVentePlay || difVenteSwitch > difVenteXbox) {
      var  plusGrand = this.gameConsoles[2].name
      console.log(plusGrand)
    }
  }
}
