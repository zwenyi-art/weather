import React from 'react'



const Testing_Page = () => {
    const search_data=(mydata)=>{
        console.log(mydata);
    }
  return (
    <div>
      <Search_Box mysearched={search_data}></Search_Box>
    </div>
  )
}

export default Testing_Page