import React from "react";
import "./App.css";
import CurrentWeather from "./pages/CurrentWeather";
import ExtendedWeather from "./pages/ExtendedWeather";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={CurrentWeather} />
        <Route path="/extended-weather" exact component={ExtendedWeather} />
      </div>
    </Router>
  );
};

export default App;
