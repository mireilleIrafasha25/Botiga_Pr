import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import "./Dashstyles/dashboardviewtask.css" // Twazanye CSS file
import { useDarkModeTask } from "./contextTask/darkModeContextTask";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import {BarChart,Bar,ResponsiveContainer,XAxis,YAxis,Tooltip,} from "recharts";
import MyLineChart from "./MyLinechart";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
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
          title: "Total Task",
          amount: "14658",
          percentage: "30.6%",
          icon: "💰",
          color: "#4AB491", 
        },
        {
          id: 2,
          title: "Download",
          amount: "$34045",
          percentage: "30.6%",
          icon: "📄",
          color: "#E04545", 
        },
      ];
      
  return (
    <div>
       <div className={`banner ${theme}`}>
      <div className={`content ${theme}`}>
        <h1>Explore Redesigned Able Pro</h1>
        <p>
          The brand new User Interface with the power of Bootstrap Components.
          Explore the endless possibilities with Able Pro.
        </p>
        <button className={`button ${theme}`}>Exclusive on Themeforest</button>
      </div>
      <div className={`rocket ${theme}`}>
        <img src="/rocket2.png" alt="Rocket"/>
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
      {cardData2.map((card) => (
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
    <div className="CustomerAndProject">
      <div className="RepeatCustomer">
        <div className="RepeatHead"><span className="repeatword">Repeat customer rate</span><span className="iconMenu3"><IoEllipsisHorizontalSharp/></span></div>
        <div className="percentage3">
          <span className="repeatPerc1">5.44%</span>
          <span className="repeatPerc">+2.6%</span>
        </div>
        <MyLineChart/>
        
      </div>
      <div className="MainProject2">
        <div className="projectHead">
          <span>Project Able</span>
          <span>Pro</span>
        
        </div>
        
        <hr />
        <div className="Projectpart2">
          <div>Release v.1.2.0 70%</div>
          <div className="ColorDiv4"><span className="bluespan">.</span><span className="whitespan">.</span></div>
          <div>
            jkomjik
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}
