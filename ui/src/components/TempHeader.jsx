import React from "react";

function TempHeader() {
  return (
    <div className="flex h-7 md:h-14 text-fuchsia-500 hover:text-purple-100  dark:bg-gray-500">
      <button className="bg-violet-100 dark:bg-orange-500 hover:bg-slate-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 pl-2">
        <i className=" fa fa-fw fa-search"></i>
      </button>
    </div>
  );
}

export default TempHeader;
