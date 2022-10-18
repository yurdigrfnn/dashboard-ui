import { NavLink } from "react-router-dom"
export default function Navigation({to,icon,name}) {
    const active = "ml-4 pl-4 rounded-l-lg bg-[#1B2B65]";
    const inActive = "ml-4 pl-4 rounded-l-lg hover:bg-[#152355]";
    
    return (
        <NavLink to={to} end className={({ isActive }) => isActive ? active : inActive} >
                <div className="flex text-white py-[18px] gap-2 ">
                    {icon}
                    <h1 className='my-auto'>{name}</h1>
                </div>
        </NavLink>
    )
   
}
