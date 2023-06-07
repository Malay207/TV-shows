import React, { useState } from 'react';
import './App.css'
import ShowList from './component/ShowList';
import ShowDetails from './component/ShowDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  }


  return (

    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route exact path="/showdetails" element={<ShowDetails click={onClick} show={show} />} />
        </Routes>

      </Router>
    </>
  );
};

export default App;
