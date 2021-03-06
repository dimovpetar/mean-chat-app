import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../../shared/interfaces/user';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return localStorage.getItem('authToken');
  }

  login(user: IUser) {
    return this.http.post<IUser>('/api/login', user)
    .map(data => {
        if (data && data.authToken) {
            localStorage.setItem('username', data.username);
            localStorage.setItem('authToken', data.authToken);
            localStorage.setItem('profilePicture', data.profilePicture);
        }
        return data;
    });
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

}
