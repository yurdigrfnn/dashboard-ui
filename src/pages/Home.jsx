import { Outlet } from "react-router-dom";
import Sidebar from "../parts/sidebar/Sidebar";



export default function Home() {
    return (
        <div className="flex w-full">
            <div className="lg:w-1/6 sm:w-5/12 md:w-4/12">
                <Sidebar />
            </div>
            <div className="lg:w-5/6 sm:w-7/12 md:w-8/12 bg-[#E5E5E5]">
                <Outlet />
            </div>
        </div>
    )
}