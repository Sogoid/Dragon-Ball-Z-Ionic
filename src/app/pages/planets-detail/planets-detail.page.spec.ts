import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetsDetailPage } from './planets-detail.page';

describe('PlanetsDetailPage', () => {
  let component: PlanetsDetailPage;
  let fixture: ComponentFixture<PlanetsDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
