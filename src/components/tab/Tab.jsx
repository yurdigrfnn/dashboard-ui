import React, { useEffect, useState } from "react";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);


  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="bg-[#F5F7FB] rounded-lg p-1 w-min">
      <ul className="flex">
        {tabsData.map(({ tab }, idx) => (
          <li className={`${idx === activeTab ? "bg-[#FFFFFF] text-[#017EFA] rounded-lg font-bold" : "text-[#A9ABB0]"} cursor-pointer`}>
            <a
              className='px-8 py-2 block text-base'
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="rounded-lg mt-2 bg-white p-2">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;