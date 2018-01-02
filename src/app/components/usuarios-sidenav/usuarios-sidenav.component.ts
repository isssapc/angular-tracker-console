import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-usuarios-sidenav',
  templateUrl: './usuarios-sidenav.component.html',
  styleUrls: ['./usuarios-sidenav.component.scss']
})
export class UsuariosSidenavComponent implements OnInit {



  @Input("sidenav") sidenav: MatSidenav;

  usuarios: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
