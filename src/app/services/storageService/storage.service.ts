import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasUser());
  public isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor() {}

  // ✅ Check if there's a user stored
  private hasUser(): boolean {
    return !!window.sessionStorage.getItem(USER_KEY);
  }

  // ✅ Return the observable
  public isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }

  // ✅ Save user and notify subscribers
  public saveUser(user: any): void {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.loggedInSubject.next(true);
  }

  // ✅ Remove user and notify subscribers
  public removeUser(): void {
    window.sessionStorage.removeItem(USER_KEY);
    this.loggedInSubject.next(false);
  }

  // Optional helper to get the stored user
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}
