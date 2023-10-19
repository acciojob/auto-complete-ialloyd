
import React, { useState } from "react";
import './../styles/App.css';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {

  const [filtered, setItems] = useState(fruits);

  function filterItems(event) {

    const arr = fruits.filter((fruit) => fruit.includes(event.target.value))
    setItems(arr)

  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search Item</h1>
      <input onChange={(event) => filterItems(event)} />
      <ul>
        {filtered.map(fruit => <li>{fruit}</li>)}
      </ul>
    </div>
  )
}

export default App
