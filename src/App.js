import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
function App() {
  return (
    <BrowserRouter>

    <Route path="/">
      <Navbar />
    </Route>
    <Route exact path="/home">
      <Home />  
    </Route>
  

  </BrowserRouter>
  );
}

export default App;
