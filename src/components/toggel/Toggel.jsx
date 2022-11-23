

export default function Toggel({}){
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="w-10 h-4 bg-[#E5E7EB] rounded-full p-1">
                    <div className="w-2 h-2 bg-[#A9ABB0] rounded-full"></div>
                </div>
                <p className="text-[#A9ABB0] text-sm ml-2">Off</p>
            </div>
            <div className="flex items-center">
                <p className="text-[#A9ABB0] text-sm mr-2">On</p>
                <div className="w-10 h-4 bg-[#E5E7EB] rounded-full p-1">
                    <div className="w-2 h-2 bg-[#A9ABB0] rounded-full"></div>
                </div>
            </div>
        </div>
        
                
    )
}