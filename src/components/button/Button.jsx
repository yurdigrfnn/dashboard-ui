

export default function Button({name,className,type,onClick}){
    return (
        <button type={type} onClick={onClick} className={`inline-block py-1.5 text-sm px-4 w-min focus:ring-1 focus:outline-none font-medium rounded-md ${className}`}>{name}</button>
    )
}