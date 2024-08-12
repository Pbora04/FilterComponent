import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import './filter.css'
const Filter = ({ buttonName, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleON = () => setIsOpen(!isOpen);

  return (
    <div className="fliter" >
      <button onClick={toggleON} >
      <MdFilterList />
      {buttonName}
      </button>
      {isOpen && (
        <div className="dropdown" >
        <div className="span">
        <span > Refine by </span><span style={{color:"blue"}} > clear</span>

</div>
          {dropdownItems.map((item, index) => (
            <div  key={index}>
              <label>{item.label}</label>
              {item.type === "text" && (
                <input type="text" placeholder="enter name" />
              )}
              {item.type === "number" && (
                <input type="number" placeholder="enter age"/>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;