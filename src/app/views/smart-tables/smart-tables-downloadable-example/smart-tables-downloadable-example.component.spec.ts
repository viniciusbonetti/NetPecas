import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTablesDownloadableExampleComponent } from './smart-tables-downloadable-example.component';
import { ButtonModule, SmartTableModule } from '@coreui/angular-pro';

describe('SmartTablesDownloadableExampleComponent', () => {
  let component: SmartTablesDownloadableExampleComponent;
  let fixture: ComponentFixture<SmartTablesDownloadableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTablesDownloadableExampleComponent ],
      imports: [ButtonModule, SmartTableModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTablesDownloadableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
