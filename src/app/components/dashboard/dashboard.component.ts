import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
        padding: '0 2rem'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('0.3s cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.4s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class DashboardComponent {
  quienesSomosOpen = false;
  sobreWebOpen = false;
  
  features = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Gestión Inteligente',
      description: 'Sistema intuitivo para administrar todas tus citas de manera eficiente.'
    },
    {
      icon: 'fas fa-bell',
      title: 'Notificaciones',
      description: 'Recordatorios automáticos para mantener tu agenda al día.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Análisis',
      description: 'Estadísticas detalladas para optimizar tu gestión.'
    },
    {
      icon: 'fas fa-sync',
      title: 'Sincronización',
      description: 'Mantén tu calendario actualizado en todos tus dispositivos.'
    }
  ];

  toggleSection(section: string): void {
    if (section === 'quienesSomos') {
      this.quienesSomosOpen = !this.quienesSomosOpen;
    } else if (section === 'sobreWeb') {
      this.sobreWebOpen = !this.sobreWebOpen;
    }
  }
}

