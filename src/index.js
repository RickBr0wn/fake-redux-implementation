import React from "react";
import ReactDOM from "react-dom";

import createStore from "./createStore";
import reducer from "./reducer";

import { CREATE_NOTE, UPDATE_NOTE } from "./constants";

import NoteApp from "./Components/NoteApp";

// Create the store in the same way as redux
const store = createStore(reducer);

function App() {
  return (
    <div>
      <h1>Reducer Stuff</h1>
      <h3>The State Object</h3>
      <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
      <NoteApp />
    </div>
  );
}

// Subscribe to the store, so it will automatically update the UI
// whenever the state changes.
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});

// Some dummy actions
store.dispatch({
  type: CREATE_NOTE
});

store.dispatch({
  type: UPDATE_NOTE,
  id: 1,
  content: "Hello, world!"
});
