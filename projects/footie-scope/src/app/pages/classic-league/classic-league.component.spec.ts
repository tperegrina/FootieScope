import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLeagueComponent } from './classic-league.component';

describe('HomeComponent', () => {
  let component: ClassicLeagueComponent;
  let fixture: ComponentFixture<ClassicLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
