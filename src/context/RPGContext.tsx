import React, {useReducer} from 'react';
import {ActionType} from './actionTypes';
import initialState from '../utils/data';

type ActionProps =
  | {type: ActionType.LOAD_DATA; payload: typeof initialState}
  | {type: ActionType.CHANGE_NAME; payload: string}
  | {type: ActionType.SET_LEVEL; payload: number}
  | {type: ActionType.INCREMENT_ATTRIBUTE; payload: string}
  | {type: ActionType.DECREMENT_ATTRIBUTE; payload: string}
  | {type: ActionType.INCREMENT_DAMAGE};

const reducer = (
  state: typeof initialState,
  action: ActionProps
): typeof initialState => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return action.payload;
    case ActionType.CHANGE_NAME:
      return {...state, name: action.payload};
    case ActionType.SET_LEVEL:
      return {...state, level: action.payload};
    case ActionType.INCREMENT_ATTRIBUTE:
      return {
        ...state,
        [action.payload as keyof typeof state]: ++state[
          action.payload as keyof typeof state
        ],
      };
    case ActionType.DECREMENT_ATTRIBUTE:
      return {
        ...state,
        [action.payload as keyof typeof state]: --state[
          action.payload as keyof typeof state
        ],
      };
    case ActionType.INCREMENT_DAMAGE:
      return {
        ...state,
        damage: ++state.damage,
      };
    default:
      throw new Error();
  }
};

export const RPGCtx = React.createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
}>({state: initialState, dispatch: () => null});

export const RPGCtxProvider = ({
  children,
}: RPGCtxProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RPGCtx.Provider value={{state, dispatch}}>{children}</RPGCtx.Provider>
  );
};

interface RPGCtxProviderProps {
  children: React.ReactNode;
}
