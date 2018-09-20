# Crear componente menu

```ng g c menu```

```ng g c notFound```




# Modificar routing


```javascript
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
``` 
## Actualizar app.component.html

```html
<router-outlet></router-outlet>
```

## configuracion menu

```javascript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  watcher: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    media: ObservableMedia) { 
      this.watcher = media.subscribe((change: MediaChange) => {
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          this.opened = false;
          this.over = 'over';
        } else {
          this.opened = true;
          this.over = 'side';
        }
      });
    }

  ngOnInit() {
  }

}
```

```html
<mat-sidenav-container class="container">
  <mat-sidenav #sidenav [(mode)]="over" [(opened)]="opened" class="bottom-to-top">
    <div class="my-2" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="10px">
      <div class="with-bg"></div>
      <div>
        <a>
          <!-- <img class="circle" src="./assets/images/profile.jpg" width="100"> -->
        </a>
      </div>
    </div>
    <div style="background-color: #3e50b5 !important;" class="mt-2 py-3 text-white" fxLayout="column" fxLayoutAlign="center center"
      fxLayoutGap="7px">
      <div fxShow.lt-md="true" fxShow.gt-sm="false">
        <a mat-button routerLink="/pagina1" routerLinkActive="active"><span class="fa fa-home fa-lg"></span> pagina1</a>
        <a mat-button routerLink="/pagina2" routerLinkActive="active"><span class="fa fa-shopping-cart  fa-lg"></span> pagina2</a>
      </div>
      <div>
        <span class="lead"> Menu </span>

      </div>
      <div>

        <span> RCN Radio </span>

      </div>
    </div>
    <div class="mt-3">

      <mat-accordion multi="false" [displayMode]="displayMode">
        <mat-expansion-panel *ngFor="let a of ['uno','dos','tres','cuatro']" class="no-shadow">
          <mat-expansion-panel-header class="panel1" fxLayout="row" [expandedHeight]="expandHeight" [collapsedHeight]="collapseHeight">
            <mat-panel-title>
              {{a}}
            </mat-panel-title>
            <mat-panel-description>
              <button mat-button color="basic"><mat-icon>shopping_cart</mat-icon></button>
            </mat-panel-description>
          </mat-expansion-panel-header>




          <mat-nav-list class="ml-0" dense>
            <span> - {{a}} - interno</span>

          </mat-nav-list>
        </mat-expansion-panel>

      </mat-accordion>
    </div>
  </mat-sidenav>

  <mat-sidenav-content>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```
```css
mat-sidenav {
  width: 250px;;
}
```
# necesitamos un boton en el header!

```html
<button mat-icon-button (click)="openMenu()" fxShow.sm="true" fxShow.gt-sm="false">
  <mat-icon>menu</mat-icon>
</button>
```