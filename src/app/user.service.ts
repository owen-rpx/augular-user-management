import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersURL = 'api/users';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getUsers(): Observable<User[]> {
    this.log('已经获取到用户列表!');
    return this.http.get<User[]>(this.usersURL);
  }

  getUser(id: number): Observable<User> {
    this.log(`已经获取到用户id=${id}`);
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url);
  }
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
