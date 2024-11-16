import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-view-detalle-doc',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './view-detalle-doc.component.html',
  styleUrl: './view-detalle-doc.component.css'
})
export class ViewDetalleDocComponent implements OnInit{
  doctor: any;
  doctors = [
    { id: 1, nombre: 'Dr. John Doe', especialidad: 'CARDIOLOGIA', imgUrl:"https://tse2.mm.bing.net/th?id=OIP.B97fQfkfWspQMJ3QQF3j6AHaLu&pid=Api&P=0&h=180"},
    { id: 2, nombre: 'Dr. Jane Smith', especialidad: 'DERMATOLOGIA', imgUrl:"https://tse3.mm.bing.net/th?id=OIP.jwkMyIQo54tn3KYxOgNrOAHaIU&pid=Api&P=0&h=180"},
    { id: 3, nombre: 'Dr. Michael Johnson', especialidad: 'PEDIATRIA', imgUrl:"https://tse2.mm.bing.net/th?id=OIP.7uCPgyjm2X1Kc-PXm3nxmwHaLP&pid=Api&P=0&h=180"},
    { id: 4, nombre: 'Dr. Emily Brown', especialidad: 'PSIQUIATRIA', imgUrl:"https://tse1.mm.bing.net/th?id=OIP.UokxxfNaSz-lZROCIMvW4QHaLQ&pid=Api&P=0&h=180"},
    { id: 5, nombre: 'Dr. David Lee', especialidad: 'ORTOPEDISTA', imgUrl:"https://tse3.mm.bing.net/th?id=OIP.0Ttue7YQAsl2DKGwh4POzgHaHa&pid=Api&P=0&h=180" }
  ];
  
  id!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtiene el parámetro 'id' desde la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctor = this.doctors.find(d => d.id === id);
  }
}
