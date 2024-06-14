import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabViewModule, RouterLink, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'socla-psi';
  navigateMenu: any = {
    0: '/',
    1: 'quien-soy',
    2: 'servicios',
    3: 'contacto'
  }
  url!: string;
  activeTab: number = 0;
  loaded: boolean = false;
  tabs = [
    {tabName:'Primer contacto', tabContent: `Tendremos una llamada en la que nos conoceremos y podrás
explicarme cuáles son tus necesidades. Así podremos marcar la hoja de ruta para iniciar
nuestro camino.`, active: true},
    {tabName:'Evaluación', tabContent: `Agendaremos una primera entrevista en la que comenzaremos un proceso de evaluación
para posteriormente comentar los resultados.`, active: false},
    {tabName:'Intervención', tabContent: `Una vez que conozcamos y analicemos las necesidades que te han traído hasta aquí,
plantearemos juntos/as los objetivos terapéuticos y la intervención.`, active: false},
  ]
items: any;

  constructor (private router: Router) {
  }
  
  ngOnInit(): void {

  }

  changeTabContent(tabIndex: number) {    
    this.tabs.forEach((tab, index:number)=>{
      index == tabIndex ? tab.active = true : tab.active = false;
    })
  }

}
