import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { LoadActionComponent } from './components/load-action/load-action.component';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
const materialModules = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatBadgeModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    LoadingComponent,
    SnackbarComponent,
    HeaderComponent,
    FooterComponent,
    CartHeaderComponent,
    LoadActionComponent,
    StartRatingComponent,

  ],
  imports: [
    CommonModule,
    materialModules,
    HttpClientModule,
  ],
  exports :[
    LoadingComponent,
    SnackbarComponent,
    HeaderComponent,
    FooterComponent,
    materialModules,
    LoadActionComponent,
    StartRatingComponent,

   ]
})
export class SharedModule { }
