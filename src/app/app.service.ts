import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user/user.model';
import { MatTableDataSource } from '@angular/material';
import { Http, Headers, Response } from '@angular/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    users;
    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8080';
    headers;
    public getUsers(): Observable<User[]> {
        const auth_token = window.sessionStorage.getItem('Authorization');
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': auth_token
          });


        return this.http.options<User[]>(this.userUrl + '/user',
        {
            headers: new HttpHeaders().set('Authorization', auth_token)
          }
         );
        }

}
