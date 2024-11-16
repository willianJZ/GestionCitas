import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { LisCitasComponent } from '../../components/lis-citas/lis-citas.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-citas',
  standalone: true,
  imports: [
    NavBarComponent,
    LisCitasComponent,
    SideBarComponent,
    FooterComponent
  ],
  templateUrl: './view-citas.component.html',
  styleUrl: './view-citas.component.css'
})
export class ViewCitasComponent {

}
