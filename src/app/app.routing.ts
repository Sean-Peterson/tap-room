import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDisplayComponent } from './beer-display/beer-display.component';
import { PosComponent } from './pos/pos.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BeerDisplayComponent
  },
  {
    path: 'pos',
    component: PosComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
