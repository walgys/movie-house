import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MovieComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, MovieComponent]
})
export class SharedModule {}
