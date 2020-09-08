import {ActionEx, CarActionTypes} from './car.actions';
export const initialState = [];
export function CarReducer(state = initialState, action: ActionEx): any[] {
  switch (action.type) {
    case CarActionTypes.Add:
      return [...state, action.payload];
    case CarActionTypes.Modify:
      return [...state, action.payload];
    case CarActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
