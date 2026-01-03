import React from 'react';

const PrimaryBtn = ({ text, className = '' }) => {
  return (
    <button className={`btn bg-violet-500 border border-violet-500 text-white hover:bg-transparent duration-300 active:scale-95 ${className}`}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
