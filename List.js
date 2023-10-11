import React, { useEffect, useState } from 'react';
import {list} from './data';

const List = ({people}) => {
  // const [data,setData]=useState(list);

  // useEffect(()=>{
  // //   const Arr=[];
  // //   const result=list.map((item)=>{return(item)});
  // //   Arr.push(result)
  // //   setData(result)

  // // },[])
 
  return (
    
    <>
   {
people.map((person)=>{
  const{id,name,age,image}=person;

  return(
    <article className='person' key={id}>
      <image src={image}/>
    {/* // <article>{}</article> */}
    <h2>{name}</h2>
<h3>{id}</h3>
<p>{age}</p>
</article>
  )
})

   }
   
     
      
    </>
  );
};

export default List;
