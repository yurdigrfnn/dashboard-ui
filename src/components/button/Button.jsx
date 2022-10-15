

export default function Button({name,className}){
    return (
        <button className={`inline-block py-1.5 px-4 text-sm focus:ring-1 focus:outline-none font-medium rounded-md ${className}`}>{name}</button>
    )
}