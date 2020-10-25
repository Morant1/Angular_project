import { Injectable } from '@angular/core';
import { User } from '../models/users.model';
import { BehaviorSubject, throwError } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// import { retry, catchError, map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

const key = "USER";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private utilsService: UtilsService) { }

  private _user$ = new BehaviorSubject<User>(null);
  public user$ = this._user$.asObservable()

  public getUser() {
    let user = this.utilsService.loadFromStorage(key)
    this._user$.next(user)
  }



  public signup(name:string){
    const userName = name.charAt(0).toUpperCase() + name.slice(1);
    const newUser = {
      _id:this.utilsService.getRandomId(),
      name: userName,
      coins: 100,
      moves: []
    }

    this.utilsService.saveToStorage(key,newUser)
    this._user$.next(newUser)
  }

  public getCurrentUser() {
    const user = this.utilsService.loadFromStorage(key);
    return user;
  }

  public updateUser(currUser:User) {
    const user = {...currUser};
    this.utilsService.saveToStorage(key,user)
    this._user$.next(user)
  }


}


