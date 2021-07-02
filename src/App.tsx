import React from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <CurrentWeather />
    </div>
  );
};

export default App;
