import "./movie-add.css";
import { useState ,useContext} from "react";
import { Context } from "../contex";
// Fragment

const MovieAdd = () => {
  const [state,  setState] = useState({name: '', viewers: ''})
  const { _, dispatch } = useContext(Context)


  const changeHandler = e =>{
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const addformhandler = e =>{
    e.preventDefault()
    const data = { name: state.name, viewers: state.viewers }
    dispatch({type: 'AddMovie', payload: data})
    setState({ name: '', viewers: '' })
  }

  const {name, viewers} = state
  return (
    <div className="movie-add">
      <h3>Add Movie</h3>
      <form className="add-form d-flex" onSubmit={addformhandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Movie name"
          onChange={changeHandler}
          name="name"
          value={name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Number of Views"
          onChange={changeHandler}
          name="viewers"
          value={viewers}
        />
        <button type="submit" className="btn btn-outline-dark">
          Add Movie
        </button>
      </form>
    </div>
  );

}

export default MovieAdd;
