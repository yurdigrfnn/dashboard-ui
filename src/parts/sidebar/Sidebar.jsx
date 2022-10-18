import logo from './../../assets/images/logo.png'
import {AiOutlineDashboard,
        AiOutlineInbox,
        AiOutlineContacts,
        AiOutlineSchedule,
        AiOutlineSearch,
        AiOutlineAreaChart,
        AiOutlineFolder,
        AiOutlineSetting 
        } from 'react-icons/ai'
import Navigation from '../../components/Navigation'

export default function Sidebar() {
    return (
        <div className="bg-[#081A51] h-screen sticky top-0 scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-2 scrollbar-thumb-rounded-lg">
            <div className="flex flex-col">
                <div className="flex ml-4 pl-4 mt-6 gap-4">
                    <img src={logo} alt="" />
                    <h1 className='font-extrabold my-auto text-white text-2xl'>Dash</h1>
                </div>
                <div className='ml-4 pl-4 mt-14'>
                    <h3 className='text-[#51CBFF] mb-3 text-xs font-medium'>MAIN MENU</h3>
                </div>
                <Navigation name="Dashboard" icon={<AiOutlineDashboard className='inline-block text-2xl text-white' />} to="/" />
                <Navigation name="inbox" icon={<AiOutlineInbox className='inline-block text-2xl text-white'/>} to="inbox" />
                <div className='ml-4 pl-4'>
                    <h3 className='text-[#51CBFF] mb-3 text-xs font-medium mt-9'>Workspace</h3>
                </div>
                <Navigation name="Accounts" icon={<AiOutlineContacts className='inline-block text-2xl text-white'  />} to="accounts" />
                <Navigation name="Schedule Post" icon={<AiOutlineSchedule className='inline-block text-2xl text-white' />} to="schedule" />
                <Navigation name="Communities" icon={<AiOutlineSearch className='inline-block text-2xl  text-white' />} to="communities" />
                <Navigation name="Analytics" icon={<AiOutlineAreaChart className='inline-block text-2xl text-white' />} to="analytics" />
                <div className='ml-4 pl-4'>
                    <h3 className='text-[#51CBFF] mb-3 text-xs font-medium mt-9'>General</h3>
                </div>
                <Navigation name="File & Folder" icon={<AiOutlineFolder className='inline-block text-2xl text-white' />} to="fileandfolder" />
                <Navigation name="Setting" icon={<AiOutlineSetting className='inline-block text-2xl text-white' />} to="setting" />
            </div>
        </div>
    )
}