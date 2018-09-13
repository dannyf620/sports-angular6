import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatExpansionModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule],
  exports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule],
})
export class MaterialModule { }
