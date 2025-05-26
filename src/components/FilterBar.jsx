import React from 'react';

function FilterBar({ filtered }) {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
      {filtered.map((book) => {
        return (
          <div
            key={book.id}
            className="bg-gray-800 text-white shadow-md rounded-xl p-4 flex flex-col items-center mb-2 "
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-24 h-32 object-cover rounded mb-2"
            />
            <h1 className='text-lg bold font-bold '>{book.title}</h1>
            <h3 className='font-semibold' >{book.author}</h3>
            <h3 className='font-extralight'>{book.category}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default FilterBar;
