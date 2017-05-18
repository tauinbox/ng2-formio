import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule } from '../..';
import { MainComponent } from './components/main';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { RenderOutComponent } from './components/render-out';

@NgModule({
  imports: [
    BrowserModule,
    FormioModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    RenderOutComponent
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}

