import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeoDataComponent } from './list-geo-data.component';

describe('ListGeoDataComponent', () => {
  let component: ListGeoDataComponent;
  let fixture: ComponentFixture<ListGeoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGeoDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGeoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
