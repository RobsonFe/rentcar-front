import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AppModule } from './modules/module/app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppModule],
})
export class AppComponent {
  title = 'rent-front';

  ngOnInit(): void {
    initFlowbite();
  }
}
