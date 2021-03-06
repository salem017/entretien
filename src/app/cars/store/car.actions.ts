import {Action} from '@ngrx/store';
export enum CarActionTypes {
  Add = '[Car Component] Add',
  Remove = '[Car Component] Remove',
  Modify = '[Car Component] Modify'
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
export class CarModify implements ActionEx {
  readonly type = CarActionTypes.Modify;
  constructor(public payload: any) {
  }
}
export class CarRemove implements ActionEx {
  readonly type = CarActionTypes.Remove;
  constructor(public payload: any) {
  }
}
