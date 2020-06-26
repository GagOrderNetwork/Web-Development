import { createStore, combineReducers, applyMiddleware } from 'redux';
import { compose } from './devtools';
import thunk from 'redux-thunk';
import { localStorage } from './localStorage';

// return a store initializer
function init ( reducers={}, state ) {
  return createStore(
    combineReducers( reducers ),
    state || {},
    compose( applyMiddleware( thunk ), localStorage() )
  );
}

export { init };
