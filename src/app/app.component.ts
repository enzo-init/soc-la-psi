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

  constructor (private router: Router) {
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd) {
          this.url = event.url;
          this.checkTab(this.navigateMenu,this.url);
      }
    })
  }
  
  navigateView(event: any) {
    this.router.navigate([this.navigateMenu[event.index]]);
  }

  checkTab(object: any, url: string) {
    for (const [key,val] of Object.entries(object)) {
      if ('/'+val === url) {
        this.activeTab = Number(key);
      }
    }
  }
}
