import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className="dashboard-layout">
              <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <DashboardHeader className={`dashboard-header ${isSidebarOpen ? 'shifted' : ''}`} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <main className={`content-area ${isSidebarOpen ? 'shifted' : ''}`}>
                    {/* Your main content goes here */}
                    <h2>Main Content Area</h2>
                    <p>This is where the dashboard content will be displayed.</p>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
