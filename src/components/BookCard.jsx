import React from "react";
import { useState } from "react";
import FilterBar from './FilterBar'
import SearchBar from './SearchBar'
import { books as bookData } from "./data/books"; 
function Books(){
    const[books,setBooks]=useState(bookData);
    const[search,setSearch]=useState("")
   const filtered= books.filter(book=>
      book.title.toLowerCase().includes(search.toLowerCase())
    )
    return(
        <div className="p-5">
        <SearchBar search={search} setSearch={setSearch}/>
         <FilterBar filtered={filtered} />

        </div>
    
    );
}
export default Books;