import { useContext } from "react"
import { Context } from "../contex"
import "./app-info.css"
const AppInfo = () => {
  const { state } = useContext(Context)
  return (
      <div className="app-info">
      <div class="jumbotron text-center">
      <h1>Movie Store App</h1>
      </div>
      <div className="row">
      <span className="mx-5 fs-3 text-uppercase">Total Number of Movies: <p class="text-success align-middle ">{state.data.length}</p></span>
      <span className="mx-5 fs-3 text-uppercase">Favorite movies:<p class="text-warning">{state.data.filter((data) => data.favourite).length}</p> </span>
      </div>
    </div>
  )
}

export default AppInfo;

