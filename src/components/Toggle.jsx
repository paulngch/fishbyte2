import { useState } from "react";

export default function Toggle({scrollEnabled,setScrollEnabled}) {


  return (
    // <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="flex justify-center">
      <span className="mr-2 text-sm font-medium text-gray-900">
        picker
      </span>
      <label className="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={scrollEnabled}
          readOnly
        />
        <div
          onClick={() => {
            setScrollEnabled(!scrollEnabled);
          }}
          className="w-11 h-6 bg-gray-600 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"
        ></div>
        <span className="ml-2 text-sm font-medium text-gray-900">
          scrollbar
        </span>
      </label>
    </div>
    // </div>
  );
}
