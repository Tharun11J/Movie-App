import "./app.css";
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import MovieAdd from "../movie-add/movie-add";
import MovieList from "../movie-list/movie-list";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { Context } from "../contex";
import {Navbar}  from "../common-components/navbar";

const App = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setfilter] = useState("all");
  const [isLoding, setisLoding] = useState(false);

  const {state, dispatch} = useContext(Context)
  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      favourite: false,
      like: false,
      id: uuidv4(),
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };
  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    setData(newArr);
  };
 
  const updateTermHandler = (term) => {
    setTerm(term);
  };
  const filterUpdate = (filter) => {
    setfilter(filter);
  };

  useEffect(() => {
    setisLoding(true);
    fetch("http://localhost:8000/movies")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 200,
          favourite: false,
          like: item.completed,
        }));
        console.log(newArr);
        setData(newArr);
        dispatch({type: 'GET_DATA', payload: newArr})
      })
      .catch((err) => console.log(err))
      .finally(() => setisLoding(false));
  }, []);

  return (
      <div className="content">
        <AppInfo        />
        <div className="search__panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoding && "Loading...."}
        <MovieList />

        <MovieAdd />
      </div>
  );
};

export default App;