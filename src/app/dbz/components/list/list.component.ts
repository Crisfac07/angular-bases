import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
        name:'Trunks',
        power:10
      }];

      // onDeletedCharacter(index : number) : void{
      //     // console.log(index);
      //     this.onDeleteId.emit(index);
      // }

      deleteCharacterById(id ?: string) : void{
        // this.characterList.filter(character => character.i );
        this.onDeleteId.emit(id);
      }
}
