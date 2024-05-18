import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let routerEventsSubject: Subject<any>;

  beforeEach(async () => {
    routerEventsSubject = new Subject<NavigationEnd>();

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        TabViewModule,
        CommonModule,
        RouterLink,
        RouterOutlet,
        AppComponent // Importamos el componente standalone directamente
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            events: routerEventsSubject.asObservable(),
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "socla-psi"', () => {
    expect(component.title).toBe('socla-psi');
  });

  it('should initialize with activeTab set to 0', () => {
    expect(component.activeTab).toBe(0);
  });

  it('should navigate to correct route on navigateView call', () => {
    component.navigateView({ index: 1 });
    expect(router.navigate).toHaveBeenCalledWith(['quien-soy']);
  });

  it('should update activeTab based on URL', () => {
    component.checkTab(component.navigateMenu, '/servicios');
    expect(component.activeTab).toBe(2);
  });

  it('should subscribe to router events and update URL and activeTab', fakeAsync(() => {
    // Emitimos manualmente un evento de NavigationEnd
    routerEventsSubject.next(new NavigationEnd(0, '/contacto', '/contacto'));
    tick(); // Avanza el temporizador simulado para procesar la suscripción

    fixture.detectChanges();

    expect(component.url).toBe('/contacto');
    expect(component.activeTab).toBe(3);
  }));
});