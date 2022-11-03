import "./App.css";
import Main from "./components/Main";
import React, { useState } from "react";
import Todolist from "./components/Todolist";
import Navbar from "./components/Navbar";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Navbar />
      <Main />
      <>
        <Todolist />
        <div className="calendar-container"
        style={{
          display: 'grid',
          alignContent:'center',
          justifyContent: 'center'
        }}>
          <Calendar onChange={setDate} value={date} />
        </div>
        <div style={{color:'#bd8c7d'}}>{date.toDateString()}</div>
        <br></br>

      </>
    </div>
  );
}

export default App;
