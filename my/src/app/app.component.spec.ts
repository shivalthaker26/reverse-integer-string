import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';

import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReverseStringPipe} from './reverse-string.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        {provide: FormBuilder, useClass: FormBuilder},
        {provide: ReverseStringPipe, useClass: ReverseStringPipe}
      ],
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
    expect(app.title).toEqual('Reverse Application');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Reverse Application!');
  }));
});
