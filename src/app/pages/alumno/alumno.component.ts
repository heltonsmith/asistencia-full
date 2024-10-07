// alumno.component.ts
import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  photo: string | undefined;

  asignaturas = [
    { nombre: 'Programación en Python', codigo: 'INF101' },
    { nombre: 'Bases de Datos', codigo: 'INF102' },
    { nombre: 'Algoritmos y Estructuras de Datos', codigo: 'INF103' },
  ];

  public imageSrc: string | undefined = '';

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;
  };
}
