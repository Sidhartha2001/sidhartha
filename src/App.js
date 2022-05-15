import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import login from "./pages/Login";
import signup from "./pages/signup";
import Cart from "./pages/Cart";







import { BrowserRouter as Router, Route,Switch } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" exact component={signup} />
          <Route path="/login" exact component={login} />
          <Route path="/Cart" exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;