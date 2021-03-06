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
export class AppService {
    users;
    auth_token;
    constructor(private http: HttpClient) {
        this.auth_token = window.sessionStorage.getItem('Authorization');
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.auth_token
          });
     }

    private userUrl = 'http://localhost:8080';
    public getUsers(): Observable<User[]> {


        return this.http.options<User[]>(this.userUrl + '/user',
        {
            headers: new HttpHeaders().set('Authorization', this.auth_token)
          }
         );
        }


}
