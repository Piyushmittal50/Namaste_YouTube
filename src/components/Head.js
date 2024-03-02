import React from 'react'
import { HAMBURGER_MENU_ICON, USER_ICON, YOUTUBE_ICON } from '../utility/constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utility/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg m-2 p-2 justify-between">
      <div className="flex mx-2 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_MENU_ICON}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="YouTube" src={YOUTUBE_ICON} />
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 p-2 border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search For YouTube"
        />
        <button className="border rounded-r-full p-2 border-gray-400">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-9" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
}
export default Head;