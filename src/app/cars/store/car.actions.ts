import {Action} from '@ngrx/store';
export enum CarActionTypes {
  Add = '[Car Component] Add',
  Remove = '[Car Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class CarAdd implements ActionEx {
  readonly type = CarActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class CarRemove implements ActionEx {
  readonly type = CarActionTypes.Remove;
  constructor(public payload: any) {
  }
}
