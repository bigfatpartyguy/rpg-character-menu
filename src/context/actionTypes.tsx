const LOAD_DATA = 'LOAD_DATA';
const CHANGE_NAME = 'CHANGE_NAME';
const INCREMENT_LEVEL = 'INCREMENT_LEVEL';

const loadData = (data: Object): Object => ({
  type: LOAD_DATA,
  payload: data,
});

const changeName = (name: string): Object => ({
  type: CHANGE_NAME,
  payload: name,
});

const incrementLevel = (): Object => ({
  type: INCREMENT_LEVEL,
});

export {
  LOAD_DATA,
  CHANGE_NAME,
  INCREMENT_LEVEL,
  loadData,
  changeName,
  incrementLevel,
};
