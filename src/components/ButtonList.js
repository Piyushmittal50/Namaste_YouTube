import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div>
      <Button name="All" />
      <Button name="Music" />
      <Button name="Movies" />
      <Button name="News" />
    </div>
  );
}

export default ButtonList;