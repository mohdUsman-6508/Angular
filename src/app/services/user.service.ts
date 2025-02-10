import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private apiUrlGet = 'http://localhost:8080/api/user/get-users';
  private apiUrlAdd = 'http://localhost:8080/api/user/add-user';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrlGet);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlAdd, user);
  }
}
