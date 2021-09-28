import { Injectable } from '@angular/core'
import { GameConsole } from '../game-console.interface'

@Injectable({
  providedIn: 'root'
})
export class GameConsoleService {
  list(): GameConsole[] {
    return [
      {
        name: 'Playstation 4',
        sales2017: 20,
        sales2018: 18,
        moyen2017: 20/360,
        moyen2018: 18/360
      },
      {
        name: 'X Box One',
        sales2017: 7.62,
        sales2018: 6.96,
        moyen2017: 7.62/360,
        moyen2018: 6.96/360
      },
      {
        name: 'Switch',
        sales2017: 0,
        sales2018: 16.33,
        moyen2017: 0/360,
        moyen2018: 16.33/360
      }
    ]
  }
}
