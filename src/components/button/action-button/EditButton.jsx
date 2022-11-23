import { AiOutlineEdit } from "react-icons/ai";


const EditButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-block py-1.5 text-sm px-3 w-min focus:ring-1 focus:outline-none font-medium rounded-md bg-[#017EFA] text-white"
        >
            <AiOutlineEdit />
        </button>
    );
}

export default EditButton;