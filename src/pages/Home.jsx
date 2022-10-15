import { Outlet } from "react-router-dom";
import Sidebar from "../parts/sidebar/Sidebar";



export default function Home() {
    return (
        <div className="flex w-full">
            <div className="w-1/6">
                <Sidebar />
            </div>
            <div className="w-5/6">
                <Outlet />
            </div>
        </div>
    )
}