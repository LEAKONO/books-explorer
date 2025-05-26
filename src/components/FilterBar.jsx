import React from 'react';

function FilterBar({ filtered }) {
  return (
    <div>
      {filtered.map((book) => {
        return (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center mb-4"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-24 h-32 object-cover rounded mb-2"
            />
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
            <h3>{book.category}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default FilterBar;
