import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RegistroComponent } from '../../components/registro/registro.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-view-registro',
  standalone: true,
  imports: [
    NavBarComponent,
    RegistroComponent,
    FooterComponent
  ],
  templateUrl: './view-registro.component.html',
  styleUrl: './view-registro.component.css'
})
export class ViewRegistroComponent {

}
