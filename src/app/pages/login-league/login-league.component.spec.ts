import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeagueComponent } from './login-league.component';

describe('LoginLeagueComponent', () => {
  let component: LoginLeagueComponent;
  let fixture: ComponentFixture<LoginLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLeagueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
