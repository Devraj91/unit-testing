import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {AuthService} from "../auth.service";

import { LoginComponent, User } from './login.component';
import { DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";
// describe('LoginComponent', () => {
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

 
  
  

  // it('can login return false when user is not logged in', () => {
  //   spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
  //   expect(component.needsLogin()).toBeTruthy();
  //   expect(authService.isAuthenticated).toHaveBeenCalled();
  // });

  // it('can login return false when user is  not authenticated', () => {
  //   spy = spyOn(authService,'isAuthenticated').and.returnValue(true);
  //   expect(component.needsLogin()).toBeFalsy();

  //   expect(authService.isAuthenticated).toHaveBeenCalled();
  // });

  // it('login button hidden when the user is authenticated', () => {
  //   expect(el.nativeElement.textContent.trim()).toBe('');
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');
  //   spyOn(authService, 'isAuthenticated').and.returnValue(true);
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Logout');
  // });


  // it('Button label via fakeAsync() and tick()', fakeAsync(() => {
  //   expect(el.nativeElement.textContent.trim()).toBe('');
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');

  //   spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

  //   component.ngOnInit();
  //   // Simulates the passage of time until all pending asynchronous activities complete
  //   tick();
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Logout');
  // }));

  // it('Button label via async() and whenStable()', async(() => {
  //   // async() knows about all the pending promises defined in it's function body.
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');
  //   spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

  //   fixture.whenStable().then(() => {
  //     // This is called when ALL pending promises have been resolved
  //     fixture.detectChanges();
  //     expect(el.nativeElement.textContent.trim()).toBe('Logout');
  //   });

  //   component.ngOnInit();

  // }));

  // it('Button label via jasmine.done', (done) => {
  //   fixture.detectChanges();
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');

  //   // Make the authService return a promise that resolves to true
  //   let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
  //   // We trigger the component to check the authService again
  //   component.ngOnInit();

  //   // We now want to call a function when the Promise returned from authService.isAuthenticated() is resolved
  //   spy.calls.mostRecent().returnValue.then(() => {
  //     // The needsChanged boolean has been updated on the Component so to update the template we trigger change detection
  //     fixture.detectChanges();
  //     // Now the label is Logout
  //     expect(el.nativeElement.textContent.trim()).toBe('Logout');
  //     // We tell jasmine we are done with this test spec
  //     done();
  //   });
  // });


  describe('Component: Login', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let submitEl: DebugElement;
    let loginEl: DebugElement;
    let passwordEl: DebugElement;
  
    beforeEach(() => {
  
      TestBed.configureTestingModule({
        declarations: [LoginComponent]
      });
  
  
      fixture = TestBed.createComponent(LoginComponent);
  
      component = fixture.componentInstance;
  
      submitEl = fixture.debugElement.query(By.css('button'));
      loginEl = fixture.debugElement.query(By.css('input[type=email]'));
      passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    });
  
    it('Setting enabled to false disabled the submit button', () => {
      component.enabled = false;
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeTruthy();
    });
  
    it('Setting enabled to true enables the submit button', () => {
      component.enabled = true;
      fixture.detectChanges();
      expect(submitEl.nativeElement.disabled).toBeFalsy();
    });
  
    it('Entering email and password emits loggedIn event', () => {
      let user: User;
      loginEl.nativeElement.value = "test@example.com";
      passwordEl.nativeElement.value = "123456";
  
      component.loggedIn.subscribe((value) => user = value);
  
      submitEl.triggerEventHandler('click', null);
  
      expect(user.email).toBe("test@example.com");
      expect(user.password).toBe("123456");
    });
  });
  // });