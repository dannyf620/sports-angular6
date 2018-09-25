# directive

```
ng g directive incrementOnScroll
```
 ## importamos dependencias necesarias 

```javascript
import { EventEmitter, Directive, OnInit, OnDestroy, ElementRef, Output, Input } from '@angular/core';
``` 

## Creamos y destruimos el evento de scroll 
```javascript 
  @Output() endingScroll: EventEmitter<any> = new EventEmitter();
  @Input() moreItems: boolean=false;
  scrollTimer = undefined;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, false); //third parameter
  }
  ngOnDestroy() {

    window.removeEventListener('scroll', this.scroll, true);
  }
```

## ahora construimos la logica al hacer scroll 

```javascript
scroll = (): void => {}

    this.el.nativeElement.parentElement.getBoundingClientRect().bottom 
    window.innerHeight
    this.endingScroll.emit('Emitimos algo');        
``` 
# podemos enitir un objeto 

## podemos emitir una funcion???

# ya estamos listos para usar esta directiva 

```html
<div rcnradioIncrementOnScroll (endingScroll)="callOnEndScroll($event)" moreItems="{{true}}">
<div rcnradioIncrementOnScroll (endingScroll)="callOnEndScroll($event)" [moreItems]="moreItems">
```

```javascript
  moreItems = false;
  itemsToShow: number = 10;
  addItems() {
    this.moreItems = true;
    window.scrollTo(window.scrollX, window.scrollY + 1);
  }
  callOnEndScroll(event: any) {
    if (this.itemsToShow < listado.length - 5) {
      this.itemsToShow += 5;
    } else {
      this.itemsToShow = listado.length;
      //llamaos la funcion que creamos? 
    }
  }
```