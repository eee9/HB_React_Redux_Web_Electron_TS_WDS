import * as React from 'react';

import {Provider, connect} from 'react-redux';
import store, {IState } from './redux/store';
import * as actions from './redux/actions';
import { cc, J } from './libs/mxlib';

export const Test = (props: IState) => {
  cc(J(props))
  return (
    <p>r02, K7T tests...</p>
  );
}

const mapStateToProps = (state: IState) => ({...state});
const AppContainer = connect(mapStateToProps, actions)(Test);
export const AppRx = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );  
}
