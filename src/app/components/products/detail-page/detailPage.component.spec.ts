import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageComponent } from './detailPage.component';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPageComponent]
    });
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
