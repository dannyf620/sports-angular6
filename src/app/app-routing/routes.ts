import { NotFoundComponent } from './../not-found/not-found.component';
import { MenuComponent } from './../menu/menu.component';
import { Page2Component } from './../page2/page2.component';
import { Page1Component } from './../page1/page1.component';
import { Routes } from '@angular/router';



export const routes: Routes = [

  {
    path: '', component: MenuComponent, children: [
      { path: 'pagina1',  component: Page1Component },
      { path: 'pagina2',  component: Page2Component },
      { path: '', redirectTo: '/pagina1', pathMatch: 'full' },      
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
]
