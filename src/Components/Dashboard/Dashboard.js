import React from 'react';
import './Dashboard.css'
import LabelLargeBold from './LabelLargeBold';
import Search from './Search';
import UserDetails from './UserDetails'
import Notification from './Notification'
import MetricCard from './MetricCard'
import LineChart from './LineChart';
import BarChart from './BarChart';
import Table from './Table';
import UserCard from './UserCard';
import PieChartCard from './PieChartCard';
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header-align">
        <LabelLargeBold />
        <Search />
        <UserDetails />
        <Notification />
      </div>
      <div className="flex">
        <div className="content-1">
          <div className="report">
            <MetricCard />
            <MetricCard />
            <MetricCard />
            <MetricCard />
          </div>
          <div className="chart">
            <LineChart />
            <BarChart />
          </div>
          <div >
            <Table />
          </div>
        </div>
        <div className="content-2">
          <div>
            <UserCard />
          </div>
          <div>
            <PieChartCard />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard