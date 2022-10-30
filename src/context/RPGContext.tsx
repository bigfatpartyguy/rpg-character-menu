import React, {useState, useReducer} from 'react';
import {
  LOAD_DATA,
  CHANGE_NAME,
  SET_LEVEL,
  INCREMENT_ATTRIBUTE,
  DECREMENT_ATTRIBUTE,
} from './actionTypes';
import initialState from '../utils/data';

type ActionProps =
  | {type: typeof LOAD_DATA; payload: Object}
  | {type: typeof CHANGE_NAME; payload: string}
  | {type: typeof SET_LEVEL; payload: number}
  | {type: typeof INCREMENT_ATTRIBUTE; payload: string}
  | {type: typeof DECREMENT_ATTRIBUTE; payload: string};

const reducer = (
  state: typeof initialState,
  action: ActionProps
): typeof initialState => {
  switch (action.type) {
    case LOAD_DATA:
      return state;
    case CHANGE_NAME:
      return {...state, name: action.payload};
    case SET_LEVEL:
      return {...state, level: action.payload};
    case INCREMENT_ATTRIBUTE:
      return {
        ...state,
        [action.payload as keyof typeof state]: ++state[
          action.payload as keyof typeof state
        ],
      };
    case DECREMENT_ATTRIBUTE:
      return {
        ...state,
        [action.payload as keyof typeof state]: --state[
          action.payload as keyof typeof state
        ],
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
