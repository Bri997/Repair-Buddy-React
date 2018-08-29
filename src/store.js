import repairReducer from "./reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    form: formReducer,
    repair: repairReducer
  }),
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

// export default createStore(
//   combineReducers({
//     form: formReducer,
//     reducer: repairReducer
//   }),
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
