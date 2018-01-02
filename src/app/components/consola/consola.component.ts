import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.scss']
})
export class ConsolaComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  usuarios: any[] = [];
  usuario_selected: any = {};


  constructor(
    private ubicacionSrv: UbicacionService
  ) { }

  ngOnInit() {

    this.ubicacionSrv.getUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });

  }

  seguirUsuario(usuario) {
    console.log("usuario", usuario);
    this.lat = usuario.lat;
    this.lng = usuario.lng;
    this.usuario_selected = usuario;

  }

}
