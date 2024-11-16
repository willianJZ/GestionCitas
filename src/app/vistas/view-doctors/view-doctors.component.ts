import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ListDoctorsComponent } from '../../components/list-doctors/list-doctors.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LisCitasComponent } from "../../components/lis-citas/lis-citas.component";

@Component({
  selector: 'app-view-doctors',
  standalone: true,
  imports: [
    NavBarComponent,
    ListDoctorsComponent,
    SideBarComponent,
    FooterComponent,
    LisCitasComponent
],
  templateUrl: './view-doctors.component.html',
  styleUrl: './view-doctors.component.css'
})
export class ViewDoctorsComponent {

}
