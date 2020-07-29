import {createStore} from 'redux';
import {IAction, actionTypes} from './actions';

export type listItem = {
  key: string,
  path: string,
  name: string,
  typeChar: string,
  size: number,
  isDir: boolean,
  isFile: boolean,
}

export interface IState {
  count: number,
  path: string,
  fullscreen: boolean,
  list: string[],
  dir: listItem[],
}

const initContent = (): string[] => {
  const res: string[] = ['res A', 'res 2',];
  return res
}

export const initialState: IState = {
  count: 0,
  path: '.',
  fullscreen: false,
  list: [
    ...initContent(),
    'line 1+',
    ' + row 2',
    "c'est des UTF-8 lignes. L'astéroïde B 612. Діє єї.",
    'cúóœr 乌克兰 ê aasu',
    'dfas  û ú ù 乌克兰 ł Łs Sâ Ś Ś',
  ],
  dir: [],
};

export const appReducer = (state = initialState, action: IAction): IState => {
  //getExtPaths();
  switch (action.type) {

    case actionTypes.INC:
      return {...state, count: state.count + 1};

    case actionTypes.LIST_CLEAR:
      return {...state, list: []};
    case actionTypes.LIST_ADD:
      return {...state, list: [...state.list, action.payload]};
    case actionTypes.LIST_FILL:
      return {...state, list: action.list};

    case actionTypes.NEW_PATH:
      return {...state, path: action.payload};
    case actionTypes.DIR_FILL:
      return {...state, dir: action.dir};
    case actionTypes.ITEM_ADD:
      return {...state, dir: [...state.dir, action.item]};

    case actionTypes.FULLSCREEN_ON:
      return { ...state, fullscreen: true }
    case actionTypes.FULLSCREEN_OFF:
      return { ...state, fullscreen: false }
    case actionTypes.FULLSCREEN_TOGGLE:
      return { ...state, fullscreen: !state.fullscreen }

      default:
      return state;
  }
};
export default createStore(appReducer);
