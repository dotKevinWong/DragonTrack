import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertExamplePage } from './alert-example.page';

describe('AlertExamplePage', () => {
  let component: AlertExamplePage;
  let fixture: ComponentFixture<AlertExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
