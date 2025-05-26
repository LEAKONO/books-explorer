import React from 'react'

function SearchBar({search,setSearch}) {
  return (

    <div>
     <input 
     type="search" 
     name="title" 
     value={search}
     placeholder='search books...'
     onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar