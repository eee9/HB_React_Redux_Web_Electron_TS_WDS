import * as store from './store';

export enum actionTypes {
  INC = 'INC',
  LIST_ADD = 'LIST_ADD',
  LIST_CLEAR = 'LIST_CLEAR',
  LIST_FILL = 'LIST_FILL',
  NEW_PATH = 'NEW_PATH',
  DIR_FILL = 'DIR_FILL',
  ITEM_ADD = 'ITEM_ADD',
  FULLSCREEN_ON = 'FULLSCREEN_ON',
  FULLSCREEN_OFF = 'FULLSCREEN_OFF',
  FULLSCREEN_TOGGLE = 'FULLSCREEN_TOGGLE',
}

export interface IAction {
  type: actionTypes,
  payload?: string,
  list?: string[],
  dir?: store.listItem[],
  item?: store.listItem,
}

export const inc = (): IAction => {
  const action = {
    type: actionTypes.INC,
  };
  return action;
};

// LIST funcs
export const add2List = (line: string): IAction => {
  const action = {
    type: actionTypes.LIST_ADD,
    payload: line,
  };
  return action;
};
export const fillList = (lines: string[]): IAction => {
  const action = {
    type: actionTypes.LIST_FILL,
    list: lines,
  };
  return action;
};
export const clearList = (): IAction => {
  const action = {
    type: actionTypes.LIST_CLEAR,
  };
  return action;
};


export const newPath = (path: string): IAction => {
  const action = {
    type: actionTypes.NEW_PATH,
    payload: path,
  };
  return action;
};
export const fillDir = (content: store.listItem[]): IAction => {
  const action = {
    type: actionTypes.DIR_FILL,
    dir: content,
  };
  return action;
};
export const itemAdd = (item: store.listItem): IAction => {
  const action = {
    type: actionTypes.ITEM_ADD,
    item: item,
  };
  return action;
};

// FULLSCREEN funcs
export const fullscreenOn = (): IAction => {
  const action = {
    type: actionTypes.FULLSCREEN_ON,
  };
  return action;
};
export const fullscreenOff = (): IAction => {
  const action = {
    type: actionTypes.FULLSCREEN_OFF,
  };
  return action;
};
export const fullscreenToggle = (): IAction => {
  //ccc('FS toggle')
  const action = {
    type: actionTypes.FULLSCREEN_TOGGLE,
  };
  return action;
};
