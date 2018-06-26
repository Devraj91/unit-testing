import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AuthService} from "../auth.service";

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  // let component: LoginComponent;
  // let fixture: ComponentFixture<LoginComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  let component: LoginComponent;
  let service: AuthService;
  let spy: any;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('can login return false when user is not logged in', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('can login return false when user is  not authenticated', () => {
    spy = spyOn(service,'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

});
