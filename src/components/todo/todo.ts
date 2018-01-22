import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.interface';

/**
 * Generated class for the TodoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'todo',
  templateUrl: 'todo.html'
})
export class TodoComponent {

  @Input() item: Item;

}
