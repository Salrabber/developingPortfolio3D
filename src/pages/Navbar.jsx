import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
        <div>Navbar</div>
      {/* <a href={`/developingPortfolio3D/matrix`}>To matrix</a> */}
      <Link to="/developingPortfolio3D/matrix">to matrix</Link>
      <br></br>
      {/* <a href={`/developingPortfolio3D/`}>To home</a> */}
      <Link to="/developingPortfolio3D/">to home</Link>
      <br></br>
      <a href='#'>To app</a>    
    </div>
  );
};

export default Navbar;
