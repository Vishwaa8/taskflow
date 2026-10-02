import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* Top Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1 overflow-x-hidden">
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  )
}

export default DashboardLayout