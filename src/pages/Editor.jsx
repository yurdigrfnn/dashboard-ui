import React, { useEffect, useState } from "react";
import ReactPrismEditor from "react-prism-editor";




const Editor = () => {
    const [value,setValue] = useState('')
    const [code, setCode] = useState([])
    const datas = JSON.stringify(code)

    async function fetchFileContent() {
        const response = await fetch('https://dummyjson.com/products/1');
            const data = await response.json();
            console.log(data);
            setCode(data);
        }
        console.log(value);
    useEffect(() => {
        fetchFileContent();
    }, [])
    return (
        <div>
            <div>
                <div className="flex justify-between mt-10 w-11/12 mx-auto">
                    <input type="text" placeholder="File Name" className="py-1 px-4 rounded-lg outline-none ring-1 w-9/12 ring-slate-400" value={value} onChange={(e)=> setValue(e.target.value)} />
                    <div className="w-3/12 flex justify-between">
                        <div className="w-1/2 flex justify-end">
                            <button className="w-9/12 rounded-lg bg-slate-300 font-bold ring-1 ring-slate-400">test API</button>
                        </div>
                        <div className="flex justify-end w-1/2">
                            <button className=" bg-red-500 w-9/12 rounded-lg text-white font-bold ring-1 ring-red-500">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto mt-6">
                <ReactPrismEditor
                    language='json'
                    theme='tomorrow'
                    code={datas}
                    onChange={setCode}
                    lineNumber='true'
                    clipboard={true}
                    placeholder='Write your code here'
                    style={{ height: '500px', width: '100%' }}
                    showLanguage={true}
                    showLineNumbers={true}
                    changeCode={code => {
                        console.log(code)
                    }}
                />
            </div>
        </div>
    )
}

export default Editor;