import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DefaultPipe } from './default.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('practice');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to practice!');
  }));


});


describe('Hello World', () => {
  let expected = '';

  function helloWorld() {
    return 'Hello world';
  }

  beforeEach(()=> {
    expected = 'Hello world';
  });

  afterEach(()=> {
    expected = '';
  });

  it('Should return hello world', ()=> {
    expect(helloWorld()).toEqual(expected);
  });
});
