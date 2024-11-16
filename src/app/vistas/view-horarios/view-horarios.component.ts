import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HorariosComponent } from '../../components/horarios/horarios.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-view-horarios',
  standalone: true,
  imports: [
    NavBarComponent,
    HorariosComponent,
    SideBarComponent,
    FooterComponent
  ],
  templateUrl: './view-horarios.component.html',
  styleUrl: './view-horarios.component.css'
})
export class ViewHorariosComponent {

}
