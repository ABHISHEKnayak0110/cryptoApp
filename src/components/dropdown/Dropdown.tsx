import React, { useState, useEffect, useRef } from 'react';
import style from  './Dropdown.module.scss'; // Import your CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface dropDownProps {
  optionList: Array<string | number>
  setDataOutside: (a: any) => void;
  defaultSelected?: number | string;
  defaultText?: string
}

function Dropdown(props: dropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef: any = useRef(null);

  /*handle toggle for close and open dropdown*/
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    /*function for select option */
  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    props.setDataOutside(option)
    setIsOpen(false);
  };

  /*function for close dropdown if someone click from outside*/
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the window
    window.addEventListener("click", handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.customdropdown} ref={dropdownRef}>
      <div className={style.dropdownheader} onClick={toggleDropdown}>
        {selectedValue || (props.defaultText ? props.defaultText : 'Select')}
        <FontAwesomeIcon icon={faAngleDown} className={`${style.arrow} ${isOpen ? style.up : style.down}`} />
      </div>
      {isOpen && (
        <ul className={style.dropdownlist}>
          {props.optionList.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

