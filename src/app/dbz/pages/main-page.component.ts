import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page-name',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService : DbzService){

  }

  get characters() :Character[]{
    return this.dbzService.characters;
  }

  public onCharacter(id: string): void{
    this.dbzService.deletedCharacterById(id);
  }

  public onNewCharacter(character : Character): void{
    this.dbzService.addCharacter(character);
  }
}
