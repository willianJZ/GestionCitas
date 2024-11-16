import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-doctors',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent {
  doctors = [
    {id: 1, nombre: 'Dr. John Doe', especialidad: 'CARDIOLOGIA' },
    {id: 2, nombre: 'Dr. Jane Smith', especialidad: 'DERMATOLOGIA' },
    {id: 3, nombre: 'Dr. Michael Johnson', especialidad: 'PEDIATRIA' },
    {id: 4, nombre: 'Dr. Emily Brown', especialidad: 'PSIQUIATRIA' },
    {id: 5, nombre: 'Dr. David Lee', especialidad: 'ORTOPEDISTA' }
  ];

  constructor(private router: Router) {}

  verDetalleDoctor(doctorId: string): void {
    this.router.navigate(['/detalle-doctor', doctorId]);
  }

  selectedDoctor: any;

  handleDoctorSelection(doctor: any) {
    this.selectedDoctor = doctor;
  }

  handleConfirmSelection() {
    if (this.selectedDoctor) {
      console.log(`Confirmado: ${this.selectedDoctor.nombre}`);

    }
  }    
}
