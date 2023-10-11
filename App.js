import React, { useState } from 'react';
// import data from './data';
import List from './List';
import { list } from './data';
function App() {
  const[people,setPeople]=useState(list)
  return (
  <main>
    <section className='container'>
    <h3>We have {list.length} Birthdays Today</h3>
  

    <List people={people}/>
    <button onClick={()=>{setPeople([])}}>clik</button>
    </section>
    
    </main>
  
  )
}

export default App;
