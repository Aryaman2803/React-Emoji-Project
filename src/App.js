import React, { useEffect, useState } from "react";
import Loading from "./isLoading";
import { IoSearch } from "react-icons/io5";
// import fetchData from "./fetchData";
const url =
  "https://emoji-api.com/emojis?access_key=0b123a2521de694967e202c8f1611a5419b3837d";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  if (isLoading) {
    return (
      <main> 
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <section className="section-search">
        <form onSubmit={handleSubmit}>
          <div>
            <IoSearch />
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
