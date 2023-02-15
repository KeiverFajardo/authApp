import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Authresponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl : string = environment.baseUrl;

  constructor( private http : HttpClient ) { }

  login( email : string, password: string ){

    const url = `${ this.baseurl }/auth`;
    const body = { email, password }
    
    return this.http.post<Authresponse>( url, body)
  }
}
