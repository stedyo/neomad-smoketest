import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Neomad from "./reducers";
import Routes from "./routers";

// create store
const store = createStore(
  Neomad,
  composeWithDevTools()
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
