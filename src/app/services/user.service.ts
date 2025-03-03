import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/User.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  baseUrl = `http://localhost:8080/api/user/`;

  getUser(id: number): Observable<User> {
    let getUserUrl = `http://localhost:8080/api/user/${id}`;
    return this.http.get<User>(getUserUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
