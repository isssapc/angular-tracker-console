import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosSidenavComponent } from './usuarios-sidenav.component';

describe('UsuariosSidenavComponent', () => {
  let component: UsuariosSidenavComponent;
  let fixture: ComponentFixture<UsuariosSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
