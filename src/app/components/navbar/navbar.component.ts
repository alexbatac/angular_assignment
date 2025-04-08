import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav style="background: #007bff; padding: 1rem; color: white;">
      <a routerLink="/" routerLinkActive="active" style="margin-right: 20px; color: white;">Home</a>
      <a routerLink="/form" routerLinkActive="active" style="margin-right: 20px; color: white;">Register</a>
      <a routerLink="/map" routerLinkActive="active" style="margin-right: 20px; color: white;">Location</a>
      <a routerLink="/api-data" routerLinkActive="active" style="margin-right: 20px; color: white;">Weather</a>
    </nav>
  `
})
export class NavbarComponent {}
