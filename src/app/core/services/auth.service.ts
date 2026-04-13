import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = () => this._user() !== null;

  login(user: User): void {
    this._user.set(user);
  }

  logout(): void {
    this._user.set(null);
  }
}
