import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    DashboardComponent,
    SideBarComponent,
    FooterComponent
  ],
  templateUrl: './view-dashboard.component.html',
  styleUrl: './view-dashboard.component.css'
})
export class ViewDashboardComponent {

}
