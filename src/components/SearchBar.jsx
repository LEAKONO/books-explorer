import React from 'react'

function SearchBar({search,setSearch}) {
  return (

    <div>
     <input 
     type="search" 
     name="title" 
     value={search}
     placeholder='search books...'
     onChange={(e)=>setSearch(e.target.value)}
    className='p-2 border w-full border-black rounded'

     />

    </div>
  )
}

export default SearchBar