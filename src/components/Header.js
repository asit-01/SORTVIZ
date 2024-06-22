import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      
      <div className="header-logo"><span>SortViz</span></div>
      <div className="header__options">
         <h3 className="header__option" ><span>V</span>isualizing <span>S</span>orting <span>A</span>lgorithms</h3>
      </div>
   </div>
  )
}

export default Header;