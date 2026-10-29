import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonButton, IonLabel, IonIcon, IonChip, IonCardSubtitle, IonCardHeader } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonButton, IonLabel, IonIcon, IonChip, IonCardSubtitle, IonCardHeader, IonGrid, IonRow, IonCol],
})
export class HomePage {
  students = [
{
id: 1,
name: 'Juan Dela Cruz',
gender: 'Male',
course: 'BS Information Technology',
year: 3
},
{
id: 2,
name: 'Maria Santos',
gender: 'Female',
course: 'BS Information Technology',
year: 3
},
{
id: 3,
name: 'Carlos Reyes',
gender: 'Male',
course: 'BS Information Technology',
year: 3
},
{
id: 4,
name: 'Angela Garcia',
gender: 'Female',
course: 'BS Information Technology',
year: 3
},
{
id: 5,
name: 'Mark Villanueva',
gender: 'Male',
course: 'BS Information Technology',
year: 3
},
{
id: 6,
name: 'Sofia Mendoza',
gender: 'Female',
course: 'BS Information Technology',
year: 3
},
{
id: 7,
name: 'Daniel Bautista',
gender: 'Male',
course: 'BS Information Technology',
year: 3
},
{
id: 8,
name: 'Beatrice Navarro',
gender: 'Female',
course: 'BS Information Technology',
year: 3
}
];

//container for the selected student
selected: any = null;
//property binding for the neust banner image
banner = 'assets/neust.jpg';

  constructor() {}
//for the click event of the student card
  select(student: any) {
    this.selected = student;
  }
//for closing the details view
  close() {
    this.selected = null;
}
}