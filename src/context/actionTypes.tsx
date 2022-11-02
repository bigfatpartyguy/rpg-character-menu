import characterData from '../utils/data';

enum ActionType {
  LOAD_DATA = 'LOAD_DATA',
  CHANGE_NAME = 'CHANGE_NAME',
  SET_LEVEL = 'SET_LEVEL',
  INCREMENT_ATTRIBUTE = 'INCREMENT_ATTRIBUTE',
  DECREMENT_ATTRIBUTE = 'DECREMENT_ATTRIBUTE',
  INCREMENT_DAMAGE = 'INCREMENT_DAMAGE',
}

interface LoadData {
  type: ActionType;
  payload: typeof characterData;
}

interface PayloadString {
  type: ActionType;
  payload: string;
}

interface PayloadNumber {
  type: ActionType;
  payload: number;
}

const loadData = (data: typeof characterData): LoadData => ({
  type: ActionType.LOAD_DATA,
  payload: data,
});

const changeName = (name: string): PayloadString => ({
  type: ActionType.CHANGE_NAME,
  payload: name,
});

const setLevel = (level: number): PayloadNumber => ({
  type: ActionType.SET_LEVEL,
  payload: level,
});

const incrementAttribute = (attribute: string): PayloadString => ({
  type: ActionType.INCREMENT_ATTRIBUTE,
  payload: attribute,
});

const decrementAttribute = (attribute: string): PayloadString => ({
  type: ActionType.DECREMENT_ATTRIBUTE,
  payload: attribute,
});

const incrementDamage = (): {type: string} => ({
  type: ActionType.INCREMENT_DAMAGE,
});

export {
  ActionType,
  loadData,
  changeName,
  setLevel,
  incrementAttribute,
  decrementAttribute,
  incrementDamage,
};
