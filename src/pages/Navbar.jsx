import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
        <div>Navbar</div>
      <a href={`/matrix`}>To matrix</a>
      <br></br>
      <a href={`/home`}>To home</a>
      <br></br>
      <a href={`/`}>To app</a>    
    </div>
  );
};

export default Navbar;
