import {v4 as uuid} from 'uuid';

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power : 9000,
      id: uuid()
    },
    {
      name: 'Krilin',
      power: 1000,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 7000,
      id: uuid()
    }
  ];


  public addCharacter(character: Character): void{
    const newCharacter: Character ={id: uuid() ,...character};
    this.characters.push(newCharacter);
  }

  // public onDeletedCharacter(index : number): void{
  //   this.characters.splice(index,1);
  // }

  public deletedCharacterById(id : string): void{
    this.characters = this.characters.filter(character=> character.id !== id);
  }


}
