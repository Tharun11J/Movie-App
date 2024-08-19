import { useContext } from "react";
import { Context } from "../contex";
import "./app-filter.css";
const AppFilter = () => {
  const {state, dispatch} = useContext(Context)
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            state.filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => dispatch({type: 'onfiltr', payload: btn.name})}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};


const btnArr = [
  { name: "all", label: "All Movies" },
  { name: "popular", label: "Polpular Movies" },
  { name: "mostviever", label: "Most Viewed" },
];

export default AppFilter;
