import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibGlobalComponent } from './lib-global.component';

describe('LibGlobalComponent', () => {
  let component: LibGlobalComponent;
  let fixture: ComponentFixture<LibGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibGlobalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
