import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { BeerDisplayComponent } from './beer-display/beer-display.component';
import { routing } from './app.routing';
import { PosComponent } from './pos/pos.component';
import { EditComponent } from './edit/edit.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { NewBeerComponent } from './edit/new-beer/new-beer.component';
import { BartendersListComponent } from './pos/bartenders-list/bartenders-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    BeerDisplayComponent,
    PosComponent,
    EditComponent,
    NewBeerComponent,
    NewBeerComponent,
    BartendersListComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
