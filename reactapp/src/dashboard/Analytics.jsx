import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaRegSquareCheck } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import "./dashboard-styles/analytics.css"
const Analytics = () => {
  const cardData = [
    { title: "Orders", value: 201 ,icon:<MdContentCopy/>,perc:"20%"},
    { title: "Approved", value: 36 ,icon:<FaRegSquareCheck/>,perc:"8.5%"},

  ];
  const cardData1=[
    { title: "Month Total", value: "25,410",icon:<BsCurrencyDollar/> },
    { title: "Revenue", value: "1,352",icon:<BsCalendarEvent/> },
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
        </div>
      ))}
      </div>
      <div className="dashboard-container">
      {/* Cards section */}
      {cardData1.map((card, index) => (
        <div className={`stats-card card-${index + 1}`} key={index}>
          <h3>{card.title}</h3>
          <p>{card.value}</p>
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
      {cardData1.map((card, index) => (
        <div className={`stats-card card-${index + 1}`} key={index}>
          <h3>{card.title}</h3>
          <p>{card.value}</p>
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
