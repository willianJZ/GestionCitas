import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { LoginComponent } from '../../components/login/login.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [
    NavBarComponent,
    LoginComponent,
    FooterComponent
  ],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {

}
