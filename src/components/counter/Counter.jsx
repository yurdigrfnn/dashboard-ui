


export default function Counter({number,handleIncrement,handleDecrement}){
    return (
        <div className="flex items-center">
            <button onClick={handleDecrement} className="inline-block py-1.5 text-sm px-4 w-min focus:ring-1 focus:outline-none font-medium rounded-md bg-slate-500 text-white">-</button>
            <span className="mx-2">{number}</span>
            <button onClick={handleIncrement} className="inline-block py-1.5 text-sm px-4 w-min focus:ring-1 focus:outline-none font-medium rounded-md bg-slate-500 text-white">+</button>
        </div>
    )
}