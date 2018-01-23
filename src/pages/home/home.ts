import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.interface';
import { DataProvider } from '../../providers/data/data';

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

  items: Item[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider,
              private events: Events) {

    const self = this;
    this.dataProvider.getItems()
      .then((items: Item[]) => {

      if (items) {
        self.items = items;
      }

    })
      .catch((e) => {
        console.log(e);
      });

    this.events.subscribe('item:save', (item: Item) => {
      this.items.push(item);
      this.dataProvider.saveItems(this.items);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  addItem() {
    this.navCtrl.push('AddItemPage');
  }
}
