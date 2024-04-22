import React from "react";

function Input(props) {
  return (
    <div className="relative  mt-6">
      <input
        id={props.name}
        type={props.type}
        placeholder={" "}
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.set(e.target.value);
        }}
        className="placeholder:text-white-0
      block   w-full 
      md:text-lg
      peer
      font-bold
      rounded-md border-gray-300
      border-b-2
      py-1.5
      pl-7 pr-20
      text-pink-600 
      ring-inset
      shadow-sm
      hover:shadow-md
      hover:shadow-pink-200
      focus:shadow-pink-200
      ring-gray-300
        focus:shadow-lg
      focus:bg-slate-50
      focus:outline-none
      focus:ring-0
      focus:ring-inset
      sm:text-sm 
      sm:leading-6
      
      "
      />

      <label
        htmlFor={props.name}
        className=" 
      absolute 
      left-1
      -top-5
      text-gray-900 text-lg
      font-bold
      peer-placeholder-shown:text-base
      peer-placeholder-shown:text-gray-600
      peer-placeholder-shown:top-1.5
      peer-placeholder-shown:left-7
      transition-all
    
    "
        /* {peer-placeholder-shown} */
      >
        {props.placeholder}
      </label>
    </div>
  );
}

export default Input;
