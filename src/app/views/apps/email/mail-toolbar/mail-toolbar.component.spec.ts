import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BadgeModule, ButtonGroupModule, ButtonModule, DropdownModule } from '@coreui/angular-pro';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../../icons/icon-subset';
import { MailToolbarComponent } from './mail-toolbar.component';

describe('MailToolbarComponent', () => {
  let component: MailToolbarComponent;
  let fixture: ComponentFixture<MailToolbarComponent>;
  let iconSetService: IconSetService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MailToolbarComponent],
      imports: [ButtonGroupModule, IconModule, DropdownModule, RouterTestingModule, ButtonModule, BadgeModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(MailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
