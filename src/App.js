import { useEffect, useState } from "react";
import Loading from "./isLoading";
import { IoSearch } from "react-icons/io5";
import { Emoji } from "./Emoji";
import Favourite from "./Favourite";
// import fetchData from "./fetchData";

const getUrl = (searchParam) => {
  let url = "";
  if (searchParam) {
    url = `https://emoji-api.com/emojis?search=${searchParam}&access_key=0b123a2521de694967e202c8f1611a5419b3837d`;
  } else {
    url = `https://emoji-api.com/emojis?&access_key=0b123a2521de694967e202c8f1611a5419b3837d`;
  }
  return url;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async (value) => {
    try {
      setIsLoading(true);
      const url = getUrl(value);
      const response = await fetch(url);
      const data = await response.json();
      // setList([]);
      setList(data);
      setIsLoading(false);
      console.log("Calling from fetchData");
    } catch (error) {
      console.log("the error is: ", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //*LISTEN to form submit
    if (value) {
      fetchData(value);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (isLoading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   );
  // }

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
        <menu className="favourite">
          <Favourite />
        </menu>
      </section>
      <section className="section-emoji">
        {isLoading ? <Loading /> : <Emoji list={list} />}
        {/* {value? <Emoji list={list} /> : <Loading/>} */}
        {/* {list ? <Emoji list={list} /> : <h1>Search again</h1>} */}
      </section>
    </main>
  );
}

export default App;
