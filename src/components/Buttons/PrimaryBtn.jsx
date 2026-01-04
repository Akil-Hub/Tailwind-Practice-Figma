import React from 'react';

const PrimaryBtn = ({ text, className = '' ,onClick }) => {
  return (
    <button className={`btn bg-violet-500 border border-violet-500 text-white hover:bg-transparent duration-300 active:scale-95 ${className}`} onClick={onClick}>
      {text}
      
    </button>
  );
};

export default PrimaryBtn;
