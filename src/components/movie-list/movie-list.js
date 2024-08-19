import "./movie-list.css";

import MovielistItem from "../movie-list-item/movielist-item";
import { useContext } from "react";
import { Context } from "../contex";
import { filterHandler, searchHandler } from "../utilities/data";

const MovieList = ({ onToggleProp}) => {
  const {state} = useContext(Context)
  const data = filterHandler(searchHandler(state.data, state.term), state.filter)
  console.log(state);
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MovielistItem
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default MovieList;
