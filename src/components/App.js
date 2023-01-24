import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";
import { Route , Routes} from "react-router-dom";
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <Routes>
      <Route path="/" element={<GifListContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
