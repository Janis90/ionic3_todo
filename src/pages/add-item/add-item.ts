import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.interface';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events) {

    this.item = {
      title: '',
      description: ''
    }
  }

  saveItem() {
    this.events.publish('item:save', this.item);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
