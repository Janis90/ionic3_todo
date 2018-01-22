import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.interface';
import { ItemList } from '../../mocks/items.mocks';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {

    this.items = ItemList;

    this.events.subscribe('item:save', (item: Item) => {
      this.items.push(item);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addItem() {
    this.navCtrl.push('AddItemPage');
  }

}
