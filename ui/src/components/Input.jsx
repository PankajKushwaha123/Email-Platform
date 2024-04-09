import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col ">
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={(e) => {
          props.set(e.target.value);
        }}
        className="placeholder:text-white-0
        block   w-[70%] 
        md:text-lg
        ml-10
        mt-4
        font-bold
        rounded-md border-gray-300
        border-b-2
        
        
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
    </div>
  );
}

export default Input;
