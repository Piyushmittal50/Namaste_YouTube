import React, { useState } from 'react'
import { HAMBURGER_MENU_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SEARCH_API } from '../utility/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utility/appSlice';
import { useEffect } from 'react';
import { cacheResults } from '../utility/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  // searchCache having a structure like this
  /*
  searchCache = {
  "ip" : ["ipl","ip address"],
  "iphone" : ["iphone 12","iphone new ","iphone screen"],
  }
  */

  // every time my search query changes my useEffect will be re-render
  useEffect(() => {
    // for every search keyword make an api call
    // and if diff between 2 api call is <200ms
    // then skip some api calls
    // this concept is known as Debouncing
    //console.log(searchQuery);
    const timer = setTimeout(() => {
      // if searchQuery is already present inside store
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      }
      // otherwise call api
      else {
        getSearchSuggestions();
      }
    }, 200);

    // it is used to clear previous setTimeout(),
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    // if searchQuery is not present in store then after api call now update the store
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  };

  //const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-2">
      <div className="grid grid-flow-col pt-2">
        <div className="flex mx-4 col-span-2">
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
        <div className="col-span-9">
          <div>
            <input
              className="w-[65%] p-2 border border-black rounded-l-full border-solid"
              type="text"
              placeholder="Search For YouTube"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="border rounded-r-full p-2 border-black hover:bg-gray-400">
              Search
            </button>
          </div>
          {showSuggestion && (
            <div className="absolute w-[34rem] bg-white py-2 px-5 shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestion.map((s) => (
                  <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <img className="h-9" alt="user" src={USER_ICON} />
        </div>
      </div>
    </div>
  );
};
export default Head;