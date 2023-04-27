import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagosPage } from './pagos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PagosPageRoutingModule } from './pagos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PagosPageRoutingModule
  ],
  declarations: [PagosPage]
})
export class PagosPageModule { }
