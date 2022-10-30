const LOAD_DATA = 'LOAD_DATA';
const CHANGE_NAME = 'CHANGE_NAME';
const SET_LEVEL = 'SET_LEVEL';
const INCREMENT_ATTRIBUTE = 'INCREMENT_ATTRIBUTE';
const DECREMENT_ATTRIBUTE = 'DECREMENT_ATTRIBUTE';

const loadData = (data: Object): Object => ({
  type: LOAD_DATA,
  payload: data,
});

const changeName = (name: string): Object => ({
  type: CHANGE_NAME,
  payload: name,
});

const setLevel = (level: number): Object => ({
  type: SET_LEVEL,
  payload: level,
});

const incrementAttribute = (attribute: string): Object => ({
  type: INCREMENT_ATTRIBUTE,
  payload: attribute,
});

const decrementAttribute = (attribute: string): Object => ({
  type: DECREMENT_ATTRIBUTE,
  payload: attribute,
});

export {
  LOAD_DATA,
  CHANGE_NAME,
  SET_LEVEL,
  INCREMENT_ATTRIBUTE,
  DECREMENT_ATTRIBUTE,
  loadData,
  changeName,
  setLevel,
  incrementAttribute,
  decrementAttribute,
};
