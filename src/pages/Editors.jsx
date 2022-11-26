import React, { useEffect, useState } from "react";
import Edit from "../components/editor/Edit";
import Editor from "../components/editor/Edit";

export default function Editors() {
    const [value, setValue] = useState('')
    const [code, setCode] = useState([])
    const datas = `CREATE TABLE Employee
    (EmpID INT NOT NULL,
        EmpName VARCHAR(50) NOT NULL,
        Designation VARCHAR(50) NULL,
        Department VARCHAR(50) NULL,
        JoiningDate DATETIME NULL,
        CONSTRAINT[PK_Employee] PRIMARY KEY CLUSTERED(EmpID)
    )

--ADD ROWS TO THE TABLE.
    --SQL SERVER 2008 AND ABOVE.

INSERT INTO Employee
    (EmpID, EmpName, Designation, Department, JoiningDate)
VALUES
    (1, 'CHIN YEN', 'LAB ASSISTANT', 'LAB', GETDATE()),
    (2, 'MIKE PEARL', 'SENIOR ACCOUNTANT', 'ACCOUNTS', GETDATE()),
    (3, 'GREEN FIELD', 'ACCOUNTANT', 'ACCOUNTS', GETDATE()),
    (4, 'DEWANE PAUL', 'PROGRAMMER', 'IT', GETDATE()),
    (5, 'MATTS', 'SR. PROGRAMMER', 'IT', GETDATE()),
    (6, 'PLANK OTO', 'ACCOUNTANT', 'ACCOUNTS', GETDATE())


--SQL SERVER 2005 AND BEFORE.

INSERT INTO Employee(EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 1, 'CHIN YEN', 'LAB ASSISTANT', 'LAB', GETDATE()
INSERT INTO Employee(EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 2, 'MIKE PEARL', 'SENIOR ACCOUNTANT', 'ACCOUNTS', GETDATE()
INSERT INTO Employee(EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 3, 'GREEN FIELD', 'ACCOUNTANT', 'ACCOUNTS', GETDATE()
INSERT INTO Employee(EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 4, 'DEWANE PAUL', 'PROGRAMMER', 'IT', GETDATE()
INSERT INTO Employee(EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 5, 'MATTS', 'SR. PROGRAMMER', 'IT', GETDATE()	
INSERT INTO Employee(EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 6, 'PLANK OTO', 'ACCOUNTANT', 'ACCOUNTS', GETDATE()`



    // async function fetchFileContent(value) {
    //     const response = await fetch(value);
    //     const data = await response.json();
    //     console.log(data);
    //     setCode(data);
    // }
    // console.log(value);
    // useEffect(() => {
    //     fetchFileContent(value);
    // }, [value])

    console.log(datas);
    return (
        <div>
            <div>
                <div className="flex justify-between mt-10 w-11/12 mx-auto">
                    <input type="text" placeholder="File Name" className="py-1 px-4 rounded-lg outline-none ring-1 w-9/12 ring-slate-400" value={value} onChange={(e) => setValue(e.target.value)} />
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
                <div className="max-h-[516px] w-full rounded-lg overflow-auto">
                    <Edit code={datas} />
                </div>

            </div>
        </div>
    )
}

