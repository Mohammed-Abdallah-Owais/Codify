import { Component, inject, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  auth = inject(AuthService);
  private router = inject(Router);

  isNotifOpen = false;
  isProfileOpen = false;
  streakDays = 1;

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  toggleNotifications(event: Event): void {
    event.stopPropagation();
    this.isNotifOpen = !this.isNotifOpen;
    this.isProfileOpen = false; // Close profile if open
  }

  toggleProfile(event: Event): void {
    event.stopPropagation();
    this.isProfileOpen = !this.isProfileOpen;
    this.isNotifOpen = false; // Close notifications if open
  }

  @HostListener('document:click')
  closeDropdowns(): void {
    this.isNotifOpen = false;
    this.isProfileOpen = false;
  }
}
