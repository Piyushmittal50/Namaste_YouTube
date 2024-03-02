import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const list = ["All", "Music", "Sports", "News", "Daily", "Live", "Trending", "Cricket", "Gaming", "Bollywod", "Hollywod"];
  return (
    <div className="flex ml-4">
      {
        list.map((val, index) => (
         <Button key={index} name={val} />
        ))
      };
    </div>
  );
}

export default ButtonList;