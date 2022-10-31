import characterData from '../utils/data';
const LOAD_DATA = 'LOAD_DATA';
const CHANGE_NAME = 'CHANGE_NAME';
const SET_LEVEL = 'SET_LEVEL';
const INCREMENT_ATTRIBUTE = 'INCREMENT_ATTRIBUTE';
const DECREMENT_ATTRIBUTE = 'DECREMENT_ATTRIBUTE';
const INCREMENT_DAMAGE = 'INCREMENT_DAMAGE';

interface LoadData {
  type: string;
  payload: typeof characterData;
}

interface PayloadString {
  type: string;
  payload: string;
}

interface PayloadNumber {
  type: string;
  payload: number;
}

const loadData = (data: typeof characterData): LoadData => ({
  type: LOAD_DATA,
  payload: data,
});

const changeName = (name: string): PayloadString => ({
  type: CHANGE_NAME,
  payload: name,
});

const setLevel = (level: number): PayloadNumber => ({
  type: SET_LEVEL,
  payload: level,
});

const incrementAttribute = (attribute: string): PayloadString => ({
  type: INCREMENT_ATTRIBUTE,
  payload: attribute,
});

const decrementAttribute = (attribute: string): PayloadString => ({
  type: DECREMENT_ATTRIBUTE,
  payload: attribute,
});

const incrementDamage = (): {type: string} => ({
  type: INCREMENT_DAMAGE,
});

export {
  LOAD_DATA,
  CHANGE_NAME,
  SET_LEVEL,
  INCREMENT_ATTRIBUTE,
  DECREMENT_ATTRIBUTE,
  INCREMENT_DAMAGE,
  loadData,
  changeName,
  setLevel,
  incrementAttribute,
  decrementAttribute,
  incrementDamage,
};
