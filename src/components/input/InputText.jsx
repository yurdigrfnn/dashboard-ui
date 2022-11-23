

export default function InputText({label,className,placeholder,type,onChange}){
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input type={type} onChange={onChange} className={`py-1.5 px-2 w-full focus:ring-1 focus:outline-none font-medium rounded-md border border-gray-300 ${className}`} placeholder={placeholder}/>
        </div>
    )
}