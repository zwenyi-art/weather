import React, { useState } from 'react'

const Normal_Search = ({cityList}) => {
  
    const [mydata,setMydata]=useState('');
    console.log(mydata);
  return (
    <div>Normal_Search
        <input type="text" onChange={(e)=>(setMydata(e.currentTarget.value.toLowerCase()))}/>
     
    {
        cityList.filter((item)=>{
            return mydata.toLowerCase() === '' ? item : item.toLowerCase().includes(mydata);
        }).map((item,index)=>(
            <div key={index}>{item}</div>
        ))
    }
    </div>
  )
}

export default Normal_Search