import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaArrowDown, FaRegSquareCheck } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import "./dashboard-styles/analytics.css"
import { LuNotebook } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { useDarkMode } from "./context/DarkModeContext";
const Analytics = () => {
  const { darkMode } = useDarkMode();
  const cardData = [
    { title: "Orders", value: 201 ,icon:<MdContentCopy/>,perc:"20%"},
    { title: "Approved", value: 36 ,icon:<FaRegSquareCheck/>,perc:"8.5%"},

  ];
  const cardData1=[
    { title: "Month Total", value: "25,410",icon:<BsCurrencyDollar/>,perc:"0.2%" },
    { title: "Revenue", value: "1,352",icon:<BsCalendarEvent/> ,perc:"2.4%"},
  ]
  const cardData2=[
    { title: "Paid Invoice", value: "$25,410",icon:<LuNotebook/>,perc:"0.2%" },
    { title: "Fund Received", value: "$145,652",icon:<TfiBag/> ,perc:"2.4%"},
  ]

  return (
    <div>
      <div className="Column3">
      <div className="Order-Approval">
    <div className="dashboard-container">
      {/* Cards section */}
      {cardData.map((card, index) => (
        <div className={`stats-card card-${index + 1}`} key={index}>
          <div className="card-title"><span>{card.title}</span><span>{card.icon}</span></div>
          <p>{card.value}</p>
          <div className="Arrow-Number"><span><FaArrowUp className="Up-icon" />{card.perc}</span> <div>since last month</div></div>
         
        </div>
      ))}
      </div>
      <div className="dashboard-container">
      {/* Cards section */}
      {cardData1.map((card, index) => (
        <div className={`stats-card card-${index + 1}`} key={index}>
          <div className="card-title"><span>{card.title}</span><span>{card.icon}</span></div>
          <p>{card.value}</p>
          <div className="Arrow-Number"><span className="Down-Perc"><FaArrowDown className="Down-icon" />{card.perc}</span> <div className="lastMonth">since last month</div></div>
         
        </div>
      ))}
      </div>
      </div>
      <div className="othercolumn">Column2</div>
      <div className="othercolumn">Column3</div>
      </div>
      <div className="column2">
        <div className="BarChartcolumn">Bar Chart</div>
        <div className="dashboard-container">
      {/* Cards section */}
      {cardData2.map((card, index) => (
        <div className={`stats-card card-${index + 1}`} key={index}>
          <div className="card-title2"><span>{card.icon}</span><span className="circle-chart"><TbCircleDashedPercentage/></span></div>
          <div className="title1">{card.title}</div>
          <div className="value">{card.value}</div>
          <div className="current-financial"> Current Financial Year</div>
         
        </div>
      ))}
      </div>
      </div>
      <div className="column22">
        <div className="LineChartcolumn">Line Chart</div>
        <div className="User-table">UserTable</div>
      </div>
      </div>
  );
};

export default Analytics;
