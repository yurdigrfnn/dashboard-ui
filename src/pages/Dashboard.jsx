import dem from '../assets/images/dem.png'
import Icon from "../components/icon/Icon";
import {AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'
import {BsChevronDown,BsChevronBarRight} from 'react-icons/bs'
import LineChart from "../components/chart/LineChart";
import DonutChart from "../components/chart/DonutChart";
import BarChart from '../components/chart/BarChart';
function Dashboard() {
   

    return (
        <div className="bg-[#E5E5E5] flex flex-col">
            <div className="py-5 border-b bg-white border-b-slate-300 flex justify-between">
                <div className="flex justify-between mx-auto w-11/12">
                    <h1 className="my-auto font-bold text-3xl">Dashboard</h1>
                    <div className="flex justify-end gap-3 content-center text-center">
                        <Icon icon={<AiOutlineSearch className="text-2xl" />} />
                        <Icon icon={<AiOutlineBell className="text-2xl" />} />
                        <Icon icon={<img src="https://www.wikihow.com/images/thumb/1/13/Stewie-step-Step-9.jpg/v4-460px-Stewie-step-Step-9.jpg.webp" className="object-cover w-full h-full rounded-full"/>} />
                        <h1 className="content-center text-center my-auto text-base font-bold">yurdigrfnn</h1>
                        <button className="px-2">
                            <BsChevronDown className="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[96%] bg-white mt-3 rounded-lg">
                <LineChart />
                
            </div>
            <div className="mx-auto w-[96%] flex justify-between">
                <div className="bg-white w-[61%] mt-3 rounded-lg">
                    <div className="px-6 py-4 border-b-2 flex justify-between">
                        <div className='flex gap-4'>
                            <img src={dem} alt="" />
                            <h1 className='font-bold text-2xl'>Demographic</h1>
                        </div>
                        <div className='my-auto'>
                            <button className='flex gap-4'>
                                <span className='font-semibold text-lg text-[#017EFA]'>See Detail</span>
                                <span className='my-auto font-semibold text-lg text-[#017EFA]'>{<BsChevronBarRight/>}</span>
                            </button>
                        </div>
                    </div>
                    <div className='flex w-11/12 justify-between'>
                        <div className='mt-2'>
                            <DonutChart />
                        </div>
                        <div className='mt-2'>
                            <BarChart />
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white w-[38%] mt-3 rounded-lg">
                    <h1 className="text-2xl font-bold mt-3">Recent Activity</h1>
                </div>  
            </div>
        </div>
        )
}


export default Dashboard;