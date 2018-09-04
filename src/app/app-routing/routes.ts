import { Page2Component } from './../page2/page2.component';
import { Page1Component } from './../page1/page1.component';
import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: 'pagina1',  component: Page1Component },
  { path: 'pagina2',  component: Page2Component },
  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
