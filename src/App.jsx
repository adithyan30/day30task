import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListPages from "./components/ListPage";
import Home from "./components/Home";
import { UserContextProvider } from "./Components/Context/UserContext";

function App() {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
      </UserContextProvider>
      </div>
  );
}

export default App;
