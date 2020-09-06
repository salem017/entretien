import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  private user$: User = {id: Math.random()};
  get user(): User {
    return this.user$;
  }
}
