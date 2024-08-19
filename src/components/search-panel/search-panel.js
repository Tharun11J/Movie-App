import "./search-panel.css";
import { useState, useContext } from "react";
import { Context } from "../contex";

const SearchPanel = () =>{
  const [term, setTerm] = useState('')
  const {state, dispatch} = useContext(Context)


  const valueHandler= e =>{
    const term = e.target.value.toLowerCase()
    setTerm(term)
    dispatch({ type: "updateTermHandler", payload: term})
  }
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search a Movie"
      onChange={valueHandler}
      name="name"
      value={term}
    />
  );
  
}



export default SearchPanel;
