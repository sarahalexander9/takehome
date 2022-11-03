import React from 'react';
import { useState } from 'react';

const Todolist = () => {
  const moment = require('moment');
  let endDay = moment().endOf('day').fromNow();
 
  const [newItem, setNewItem] = useState("");
  const [items, setItem] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Please enter a task!");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItem(oldList => [...oldList, item]);

    setNewItem("");
    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter(items => items.id !== id);
    setItem(newArray);
  }  
  
  return (
      <div className='todoStyle'>
      <h1>What do you have to do today?</h1><br></br>
      <i className='q1'>“One of the secrets of getting more done is to make a TO-DO List every day, 
      keep it visible, and use it as a guide to action as you go through the day.” <br></br>— Jean de La Fontaine</i>
      <br></br><br></br>
      <input type="text"
      className='enterText' 
      placeholder='Add a task...' 
      value={newItem}
      onChange={ e => setNewItem(e.target.value)}/>
      <button className='addTask' onClick={() => addItem()}> Add task</button>
      <div className='grid-container'>
      <ul className='itemsDelete'>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button className='deleteButton' onClick={() => deleteItem(item.id)}>Done!</button></li>
          )
        })}
      </ul>
      <div><p>{items.length} left to do!</p></div>
      </div>
      <div className='q2'>
        <h1>Today ends {endDay}. How do you want to break that down?</h1><br></br>
        <p><i>"Everyone have 24 hours every day, you determine how you use your own."<br></br> -Adaeze Don</i></p>
      </div>

      </div>
    );
}

export default Todolist;