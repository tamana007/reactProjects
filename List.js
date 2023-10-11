import React, { useState } from 'react';
import {list} from './data';

const List = () => {
  const [data,setData]=useState([]);

  function pushData(){
    const people=list.map((item)=>{return item.age})
    setData(people)
  }
 
  return (
    
    <>
    {/* {list.map((item)=>{
      return (<h3>{item.id}{item.name}{item.age}</h3>)
    })} */}
   
      <h2>{data}</h2>
      <button onClick={()=>{console.log('you clicked me');}}>Clear All</button>
    </>
  );
};

export default List;
