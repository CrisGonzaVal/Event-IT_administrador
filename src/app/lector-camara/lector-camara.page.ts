import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-lector-camara',
  templateUrl: './lector-camara.page.html',
  styleUrls: ['./lector-camara.page.scss'],
})
export class LectorCamaraPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  async leerQr(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType:CameraResultType.Uri,
      source: CameraSource.Camera
  });

}
}
