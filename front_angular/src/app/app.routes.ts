import { Routes } from '@angular/router';
import { ListGeoDataComponent } from './list-geo-data/list-geo-data.component';
import { ComentSaveComponent } from './coment-save/coment-save.component';

export const routes: Routes = [
    { path: 'data', component: ListGeoDataComponent },
    { path: 'create', component: ComentSaveComponent }
];
