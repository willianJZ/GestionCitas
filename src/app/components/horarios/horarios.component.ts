import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule, DatePipe } from '@angular/common'; 

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  photoUrl: string;
}

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [NgFor,CommonModule,DatePipe],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {
  doctors: Doctor[] = [];
  weekDays: Date[] = [];
  currentWeekStart: Date = new Date();

  constructor() {
    this.generateWeekDays();
  }

  ngOnInit() {
    // Aquí cargarías los datos reales de los doctores desde tu servicio
    this.doctors = [
      {
        id: 1,
        name: 'John Doe',
        specialty: 'CARDIOLOGIA',
        photoUrl: 'https://tse3.mm.bing.net/th?id=OIP.IVwf85npYYUcwRp4EIhqDgHaJm&pid=Api&P=0&h=180'
      },
      // Agregar más doctores según necesites
    ];
  }

  get currentWeekEnd(): Date {
    const endDate = new Date(this.weekDays[this.weekDays.length - 1]);
    return endDate;
  }

  generateWeekDays() {
    this.weekDays = [];
    const startDate = new Date(this.currentWeekStart);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      this.weekDays.push(date);
    }
  }

  previousWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    this.generateWeekDays();
  }

  nextWeek() {
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    this.generateWeekDays();
  }

  getAvailableSlots(doctorId: number, date: Date): TimeSlot[] {
    // Aquí implementarías la lógica real para obtener los horarios disponibles
    // Este es solo un ejemplo
    return [
      { time: '09:00', available: true },
      { time: '09:30', available: false },
      { time: '10:00', available: true },
      { time: '10:30', available: true },
      { time: '11:00', available: false },
      // Agregar más horarios según necesites
    ];
  }

  selectTimeSlot(doctor: Doctor, day: Date, slot: TimeSlot) {
    if (slot.available) {
      // Implementar la lógica para manejar la selección de horario
      console.log(`Cita seleccionada con ${doctor.name} el día ${day.toDateString()} a las ${slot.time}`);
    }
  }
}
