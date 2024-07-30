//dashboard.js
"use client";
import withAuth from '../Components/withAuth';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected dashboard page.</p>
    </div>
  );
}

export default withAuth(Dashboard);
