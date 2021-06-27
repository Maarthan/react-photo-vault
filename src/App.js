import Navbar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhotosList from "./components/PhotosList";
import PhotoForm from "./components/PhotoForm";

function App() {
  return (
    <Router>
      <div className="App relative w-screen min-h-screen overflow-auto bg-bgray-900 pt-14 primary-text">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AlbumList />
          </Route>
          <Route path="/album/:albumId/photos">
            <PhotosList />
          </Route>
          <Route path="/add">
            <PhotoForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
