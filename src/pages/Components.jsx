import { useState } from 'react';
import Button from '../components/button/Button'
import ButtonOutline from '../components/button/ButtonOutline';
import ButtonPill from '../components/button/ButtonPill';
import Modal from '../components/modal';
import Tab from '../components/tab/Tab'
import Toggel from '../components/toggel/Toggel';


const tabContent = [
    {
        title: "Daily",
    },
    {
        title: "Weekly",
    },
    {
        title: "Monthly",
    },
    {
        title: "Yearly",
    }
];


export default function Components() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='h-screen'>
            <h1 className='mx-auto w-11/12 mt-10 font-bold text-3xl'>Components</h1>
            <div className='mt-5 mx-auto w-11/12 flex flex-col gap-6'>
                <div className=''>
                    <h1 className='text-2xl mb-3'>Button</h1>
                    <div className='flex gap-3'>
                        <Button name="button" className='bg-blue-400 text-white active:bg-blue-500' />
                        <ButtonPill name="button" className='bg-blue-400 text-white active:bg-blue-500' />
                        <ButtonOutline name="button" className='text-blue active:bg-blue-400 active:text-white' />
                    </div>

                </div>
                <div className=''>
                    <h1 className='mb-3 text-2xl'>Tabs</h1>
                    <Tab>
                        {tabContent.map((tab, idx) => (
                            <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                                {tab.content}
                            </Tab.TabPane>
                        ))}
                    </Tab>
                </div>
                <div>
                    <h1 className='mb-3 text-2xl'>Dialog(Modal)</h1>
                    <Modal children={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat fugit perspiciatis quisquam quia sapiente nobis, ex repudiandae blanditiis, laboriosam quae quod ducimus eos animi unde alias aliquam eius expedita tempora, architecto exercitationem cum. Doloremque quam quia expedita quasi deleniti accusantium, esse consectetur recusandae a cum ad laboriosam magnam aperiam voluptatum accusamus placeat facilis quod, soluta doloribus pariatur nobis. Laudantium inventore quidem blanditiis, ullam dicta nihil harum natus earum fugiat dolor doloribus aliquam nemo. Corporis reiciendis, harum quam hic pariatur doloremque sunt. Nobis, ipsam temporibus id a pariatur, ratione voluptate maxime porro ab sit mollitia quasi, quaerat voluptatibus culpa dicta.'}
                        isOpen={isOpen} onClose={() => setIsOpen(false)}
                        title="open"
                        closeButton={
                            <button onClick={() => setIsOpen(false)}>close</button>
                        }
                        
                    />
                    <Button name="open" type='button' onClick={() => setIsOpen(true)} className='bg-blue-400 text-white active:bg-blue-500' />
                </div>
                <div>
                    {/* Switch(Toggel)*/}
                    <h1 className='mb-3 text-2xl'>Switch(Toggel)</h1>
                    <Toggel />
                </div>
            </div>
        </div>  


    )
}