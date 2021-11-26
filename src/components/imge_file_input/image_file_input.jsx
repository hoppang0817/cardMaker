import React from 'react';
import style from './image_file_input.module.css';

const ImageFileInput = ({ name, onClick }) => {
  return (
    <button className={style.Image_file_input} onClick={onClick}>
      {name}
    </button>
  );
};

export default ImageFileInput;
