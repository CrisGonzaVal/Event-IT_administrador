import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actividades } from 'src/interfaces/actividades';
import { eventos } from 'src/interfaces/eventos';
import { seminarios } from 'src/interfaces/seminarios';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ApicrudSesionService } from '../services/apicrud-sesion.service';


@Component({
  selector: 'app-administrador-eventos',
  templateUrl: './administrador-eventos.page.html',
  styleUrls: ['./administrador-eventos.page.scss'],
})
export class AdministradorEventosPage implements OnInit {

  actividad: actividades[]=[];
  evento: eventos[]=[];
  seminario: seminarios[]=[];
  usuario:any;



  constructor(private apicrudSesion: ApicrudSesionService,
              private router: Router,
              private auth: AuthService, 
              private alertController: AlertController) { }

  ngOnInit() {
  this.cargarDatos();
  }
            
  ionViewWillEnter() {
  this.cargarDatos();
  }

  cargarDatos() {
    console.log("cargando datos en actividades");
    this.usuario = this.auth.getSesionAdmin();
    
    this.apicrudSesion.getActividades().subscribe((data) => {
      this.actividad = data;
    });

    this.apicrudSesion.getEventos().subscribe((data) => {
      this.evento = data;
    });

    this.apicrudSesion.getSeminarios().subscribe((data) => {
      this.seminario = data;
    });

  }

}
