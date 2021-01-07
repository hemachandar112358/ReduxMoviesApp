import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Home from "./Components/home/Home";
import Movie from "./Components/home/Movie";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Components/home/About";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie/:id" component={Movie}></Route>
        <Route exact path="/about" component={About}></Route>
      </Router>

      {/* <Footer /> */}
    </Provider>
  );
}

export default App;
