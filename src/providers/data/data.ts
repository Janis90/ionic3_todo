import { Injectable } from '@angular/core';
import { Item } from '../../models/item.interface';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private storage: Storage) {
  }

  getItems(): Promise<Item[]> {
    return this.storage.get('items');
  }

  saveItems(items: Item[]): void {
    this.storage.set('items', items);
  }

}
