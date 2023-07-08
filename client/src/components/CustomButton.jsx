import React from 'react'

import state from "../store";
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick}) => {

  const snap = useSnapshot(state);
  let contrastedColor = getContrastingColor(snap.color)

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: contrastedColor,
      }
    } else if(type === "outline") {
      return {
        backgroundColor: snap.color,
        color: contrastedColor
      }
    }
  }

  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
