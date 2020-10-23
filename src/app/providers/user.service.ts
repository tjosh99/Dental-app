import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isUserLoggedIn: boolean = false;
  private fullname: string;
  private username: string;
  private token: string;
  private empnum: string;

  constructor() { }

  public getUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  public setUserLogIn(tk: string, id: any, fullname: string): void{
    this.isUserLoggedIn;
    this.token = tk;
    this.empnum = id;
    this.fullname = fullname;
  }

  public getToken(): string{return this.token;}
  public setToken(tk: string): void {this.token=tk;}
  public getUserId(): string{return this.empnum}
  public getUsername(): string {return this.fullname}


}
