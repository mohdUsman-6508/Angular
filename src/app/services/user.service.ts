import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/user';

  getUsers(): Observable<User[]> {
    let apiUrlGet = `${this.baseUrl}/get-users`;
    return this.http.get<User[]>(apiUrlGet);
  }

  addUser(user: User): Observable<User> {
    let apiUrlAdd = `${this.baseUrl}/add-user`;
    return this.http.post<User>(apiUrlAdd, user);
  }

  deleteUser(email: string) {
    let apiUrlDelete = `${this.baseUrl}/delete-user/${email}`;
    this.http.delete(apiUrlDelete).subscribe((response) => {
      alert('User deleted!');
    });
  }

  updateUser(user: User, email: string) {
    let apiUrlUpdate = `${this.baseUrl}/update-user/${email}`;
    return this.http.patch(apiUrlUpdate, user);
  }
}
