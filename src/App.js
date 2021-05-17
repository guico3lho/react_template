import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Navbar} />

        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
