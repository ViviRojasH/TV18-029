import { Injectable } from "@angular/core";
export interface user {
  name: string;
  role;
}
@Injectable()
export class AuthProvider {
  currentUser: user;
  constructor() {}
  login(name: string, pass: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (name === "admin" && pass === "admin") {
        this.currentUser = { name: name, role: 1 };
        resolve(true);
      }
      else if (name === "cliente" && pass === "cliente") {
        this.currentUser = { name: name, role: 2 };
        resolve(true);
      }
      else if (name === "medico" && pass === "medico") {
        this.currentUser = { name: name, role: 3 };
        resolve(true);
      }
      else {
        resolve(false);

      }
    });
  }
  isLoggedIn(){
    return this.currentUser=null;
  }
  logout(){
    this.currentUser=null;
  }
  isAdmin(){
    return this.currentUser.role===0;
  }
}
