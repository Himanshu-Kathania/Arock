import React from "react";
import NavBar from "./component/Navbar/NavBar";
import CenterText from "./component/Hero/CenterText";
import LoadParent from "./component/Loading/LoadParent";
import Home from "./component/Landing/Home";
const App = () => {
  return (
    <div className="h-screen bg-[#111] w-full overflow-hidden">
      <LoadParent />
      <Home />
    </div>
  );
};

export default App;
