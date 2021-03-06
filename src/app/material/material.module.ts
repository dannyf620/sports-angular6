import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatExpansionModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule, BrowserAnimationsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule, BrowserAnimationsModule],
})
export class MaterialModule { }
