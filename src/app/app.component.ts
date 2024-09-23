import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabViewModule, RouterLink, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
