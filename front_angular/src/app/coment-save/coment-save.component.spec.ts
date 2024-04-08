import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentSaveComponent } from './coment-save.component';

describe('ComentSaveComponent', () => {
  let component: ComentSaveComponent;
  let fixture: ComponentFixture<ComentSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentSaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
