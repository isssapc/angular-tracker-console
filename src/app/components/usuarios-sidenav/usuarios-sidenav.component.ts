import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'usuarios-sidenav',
  templateUrl: './usuarios-sidenav.component.html',
  styleUrls: ['./usuarios-sidenav.component.scss']
})
export class UsuariosSidenavComponent implements OnInit {



  @Input("sidenav") sidenav: MatSidenav;

  usuarios: any[] = [];


  constructor(
    private ubicacionSrv: UbicacionService
  ) { }

  ngOnInit() {

    this.ubicacionSrv.getUsuarios()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });
  }

}
