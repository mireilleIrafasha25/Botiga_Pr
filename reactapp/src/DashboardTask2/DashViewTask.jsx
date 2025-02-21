import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import "./Dashstyles/dashboardviewtask.css" // Twazanye CSS file
import { useDarkModeTask } from "./contextTask/darkModeContextTask";
import {BarChart,Bar,ResponsiveContainer,XAxis,YAxis,Tooltip,} from "recharts";
const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
export default function DashboardViewTask() {
    const {theme} = useDarkModeTask();
    const cardData = [
        {
          id: 1,
          title: "All Earnings",
          amount: "$30200",
          percentage: "30.6%",
          icon: "💰",
          color: "#3b82f6", // Blue for earnings
        },
        {
          id: 2,
          title: "Page Views",
          amount: "290+",
          percentage: "30.6%",
          icon: "📄",
          color: "#f59e0b", // Orange for views
        },
      ];
      const cardData2= [
        {
          id: 1,
          title: "All Earnings",
          amount: "$30200",
          percentage: "30.6%",
          icon: "💰",
          color: "#3b82f6", // Blue for earnings
        },
        {
          id: 2,
          title: "Page Views",
          amount: "290+",
          percentage: "30.6%",
          icon: "📄",
          color: "#f59e0b", // Orange for views
        },
      ];
      
  return (
    <div>
       <div className="banner">
      <div className="content">
        <h1>Explore Redesigned Able Pro</h1>
        <p>
          The brand new User Interface with the power of Bootstrap Components.
          Explore the endless possibilities with Able Pro.
        </p>
        <button className="button">Exclusive on Themeforest</button>
      </div>
      <div className="rocket">
        <img src="/rocket.jpg" alt="Rocket"/>
      </div>

      {/* SVG Wave */}
      <svg className={`waves ${theme}`} viewBox="0 0 1440 320">
        <path
          fill="rgba(255, 255, 255, 0.1)"
          fillOpacity="1"
          d="M0,160L80,154.7C160,149,320,139,480,149.3C640,160,800,192,960,213.3C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div className={`Main4card ${theme}`}>
     <div className={`DashTask-card2 ${theme}`}>
     <div className={`cards-container ${theme}`}>
      {cardData.map((card) => (
        <div key={card.id} className={`card ${theme}`}>
          <div className={`card-header ${theme}`}>
            <span className={`icon ${theme}`} style={{ backgroundColor: `${card.color}20` }}>
              {card.icon}
            </span>
            <span className={`Cardtitle5 ${theme}`}>{card.title}</span>
            <span className={`menu ${theme}`}><CiMenuKebab/></span>
          </div>
          <div className={`card-body ${theme}`}>
            <div className={`chart ${theme}`}>
            
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                 <Bar dataKey="uv" fill={`${card.color}`} />
                 </BarChart>
               </ResponsiveContainer>
              <div className={`info ${theme}`}>
              <span className={`cardAmount ${theme}`}>{card.amount}</span>
              <span className={`percentage1 ${theme}`} style={{ color: card.color }}>
                ↑ {card.percentage}
              </span>
            </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
     </div>
     <div className={`DashTask-card2 ${theme}`}>
     <div className={`cards-container ${theme}`}>
      {cardData.map((card) => (
        <div key={card.id} className={`card ${theme}`}>
          <div className={`card-header ${theme}`}>
            <span className={`icon ${theme}`} style={{ backgroundColor: `${card.color}20` }}>
              {card.icon}
            </span>
            <span className={`Cardtitle5 ${theme}`}>{card.title}</span>
            <span className={`menu ${theme}`}><CiMenuKebab/></span>
          </div>
          <div className={`card-body ${theme}`}>
            <div className={`chart ${theme}`} >
            
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                 <Bar dataKey="uv" fill={`${card.color}`} />
                 </BarChart>
               </ResponsiveContainer>
              <div className={`info ${theme}`}>
              <span className={`cardAmount ${theme}`}>{card.amount}</span>
              <span className={`percentage1 ${theme}`} style={{ color: card.color }}>
                ↑ {card.percentage}
              </span>
            </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
     </div>
    </div>
    </div>
  );
}
