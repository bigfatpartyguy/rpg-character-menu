import React, {useState, useReducer} from 'react';
import {LOAD_DATA, CHANGE_NAME, INCREMENT_LEVEL} from './actionTypes';
import initialState from '../utils/data';

type ActionProps =
  | {type: typeof LOAD_DATA; payload: Object}
  | {type: typeof CHANGE_NAME; payload: string}
  | {type: typeof INCREMENT_LEVEL};

const reducer = (
  state: typeof initialState,
  action: ActionProps
): typeof initialState => {
  switch (action.type) {
    case LOAD_DATA:
      return state;
    case CHANGE_NAME:
      return {...state, name: action.payload};
    case INCREMENT_LEVEL:
      return {...state, level: state.level + 1};
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
