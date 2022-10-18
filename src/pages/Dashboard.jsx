import Icon from "../components/icon/Icon";
import {AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'
import {BsChevronDown} from 'react-icons/bs'

function Dashboard() {
    return (
        <div className="bg-[#E5E5E5] h-screen">
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
        </div>
        )
}


export default Dashboard;