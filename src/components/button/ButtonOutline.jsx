

export default function ButtonOutline({name,className}){
    return (
        <button className={`inline-block py-1.5 text-sm px-4 bg-transparent w-min focus:ring-1 focus:outline-none font-medium rounded-md border border-slate-500 ${className}`}>{name}</button>
    )
}