import { useState } from "react";
const Toggel = ({checked,handleChange}) => {
    
    return (
        // make switch using checkbox behavior and style it with tailwind css and make transition
        <div className="flex items-center">
            <div className="relative">
                <input type="checkbox" className="sr-only" id="toggle-1" onChange={handleChange} checked={checked} />
                <label htmlFor="toggle-1" className="block bg-gray-600 w-14 h-8 rounded-full"></label>
                <label htmlFor="toggle-1" className={`dot absolute ${ !checked ? 'translate-x-1': 'translate-x-7'} top-1 bg-white w-6 h-6 rounded-full transition-all duration-500`}></label>
            </div>
            <div className="ml-3 text-gray-700 font-medium">{checked ? "On" : "Off"}</div>
        </div>
    )
}
export default Toggel