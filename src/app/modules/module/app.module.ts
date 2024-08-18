import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { ToggleComponent } from '../components/toggle/toggle.component';
import { FooterComponent } from '../template/footer/footer.component';
import { GreetingsComponent } from '../pages/greetings/greetings.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    ToggleComponent,
    FooterComponent,
    GreetingsComponent,
  ],
  exports: [NavbarComponent, FooterComponent, GreetingsComponent],
})
export class AppModule {}
