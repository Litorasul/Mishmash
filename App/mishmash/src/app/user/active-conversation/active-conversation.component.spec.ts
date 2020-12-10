import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveConversationComponent } from './active-conversation.component';

describe('ActiveConversationComponent', () => {
  let component: ActiveConversationComponent;
  let fixture: ComponentFixture<ActiveConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
