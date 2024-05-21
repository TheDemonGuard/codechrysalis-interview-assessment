import React, {Fragment} from 'react';
import './App.css';

import InputNote from "./components/inputNote";
import ListNote from './components/listNote';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputNote />
        <ListNote />
      </div>
    </Fragment>
  );
}

export default App;
