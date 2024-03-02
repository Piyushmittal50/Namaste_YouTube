import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Vidoes</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-4 text-xl">Subscription</h1>
      <ul className="pt-1">
        <li>Your Music</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
      <h1 className="font-bold text-xl pt-4">Explore</h1>
      <ul className="pt-1">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>News</li>
        <li>Learning</li>
      </ul>
    </div>
  );
}

export default SideBar;