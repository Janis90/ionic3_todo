import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [ TodoComponent ],
  imports: [ IonicModule ],
  exports: [ TodoComponent ]
})
export class ComponentsModule {
}
