import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styleUrls: ['./consola.component.scss']
})
export class ConsolaComponent implements OnInit {

  lat: number = 16.7516009;
  lng: number = -93.1029939;
  zoom:number= 15;
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
