import { AiOutlineDelete } from 'react-icons/ai';



const DeleteButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="inline-block py-1.5 text-sm px-3 w-min focus:ring-1 focus:outline-none font-medium rounded-md bg-[#FF0000] text-white">
            <AiOutlineDelete />
        </button>
    )
}

export default DeleteButton