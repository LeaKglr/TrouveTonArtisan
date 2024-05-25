import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslegalesComponent } from './pageslegales.component';

describe('PageslegalesComponent', () => {
  let component: PageslegalesComponent;
  let fixture: ComponentFixture<PageslegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageslegalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageslegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
