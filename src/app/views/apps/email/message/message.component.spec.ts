import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { BadgeModule, ButtonGroupModule, ButtonModule, CardModule, DropdownModule } from '@coreui/angular-pro';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MailToolbarComponent } from '../mail-toolbar/mail-toolbar.component';
import { iconSubset } from '../../../../icons/icon-subset';
import { RouterTestingModule } from '@angular/router/testing';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  let iconSetService: IconSetService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MessageComponent, MailToolbarComponent],
      imports: [CardModule, IconModule, BadgeModule, ButtonModule, ButtonGroupModule, DropdownModule, RouterTestingModule],
      providers: [IconSetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
