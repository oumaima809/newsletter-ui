import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from './components/banner/banner.component';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, MainComponent, FooterComponent,ButtonModule,BannerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-ui';
}
