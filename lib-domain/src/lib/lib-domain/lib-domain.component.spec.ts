import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibDomainComponent } from './lib-domain.component';

describe('LibDomainComponent', () => {
  let component: LibDomainComponent;
  let fixture: ComponentFixture<LibDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
