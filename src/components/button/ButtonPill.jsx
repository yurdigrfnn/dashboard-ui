

export default function ButtonPill({name,className}){
    return (
        <button className={`inline-block py-1.5 text-sm px-4 w-min focus:ring-1 focus:outline-none font-medium rounded-full ${className}`}>{name}</button>
    )
}