import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard123175186Reducer from '../features/Dashboard123175186/redux/reducers'
import EmailAuth175165Reducer from '../features/EmailAuth175165/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard123175186: Dashboard123175186Reducer,
EmailAuth175165: EmailAuth175165Reducer,

});