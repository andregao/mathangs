import { NgModule } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { CompletedComponent } from './components/completed/completed.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListsComponent } from './components/lists/lists.component';
import { ShellComponent } from './shell/shell.component';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    ShellComponent,
    FiltersComponent,
    ListsComponent,
    CompletedComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    TextFieldModule,
    DragDropModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class HomeModule {
}
