import { Component, OnInit } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { ApicrudSesionService } from '../services/apicrud-sesion.service';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-lector-camara',
  templateUrl: './lector-camara.page.html',
  styleUrls: ['./lector-camara.page.scss'],
})
export class LectorCamaraPage implements OnInit {
  qrResult: any;
  inscripcion: any;
  scannerEnabled: boolean = false;

  private codeReader: BrowserMultiFormatReader;

  constructor(private apiCrud: ApicrudSesionService) {
    this.codeReader = new BrowserMultiFormatReader();
  }

  ngOnInit() {
    this.solicitarPermisos();
  }

  async solicitarPermisos() {
    await Camera.requestPermissions();
    try {
      await Camera.requestPermissions(); // Solicita los permisos de la cámara
      console.log('Permisos de cámara otorgados.');
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
    }
  }
  // Activar el lector de QR
  leerQr() {
    this.scannerEnabled = true;
    this.codeReader
      .decodeOnceFromVideoDevice(undefined, 'video')
      .then((result) => {
        this.qrResult = result.getText();
        this.scannerEnabled = false;
        this.buscarInscripcion(this.qrResult); // Busca información a partir del QR
      })
      .catch((err) => {
        console.error(err);
        this.scannerEnabled = false;
      });
  }

  // Método para buscar inscripción según el QR
  buscarInscripcion(id: string) {
    this.apiCrud.getInscripcion(id).subscribe(
      (data) => {
        this.inscripcion = data;
      },
      (error) => {
        console.error('Error al buscar inscripción:', error);
      }
    );
  }

  // Marca la inscripción como asistida
  marcarAsistencia() {
    if (this.inscripcion) {
      this.inscripcion.asistido = true; // Actualiza localmente
      this.apiCrud.updateInscripcion(this.inscripcion.id, { asistido: true }).subscribe(() => {
        console.log('Asistencia marcada con éxito.');
      });
    }
  }
}
