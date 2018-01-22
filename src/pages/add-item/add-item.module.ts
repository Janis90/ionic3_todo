import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemPage),
    TranslateModule.forChild(),
  ],
})
export class AddItemPageModule {}
