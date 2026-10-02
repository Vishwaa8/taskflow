import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  LayoutDashboard,
  ListTodo,
  Settings,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    name: 'My Tasks',
    icon: ListTodo,
    path: '/tasks',
  },
  {
    name: 'Calendar',
    icon: CalendarDays,
    path: '/calendar',
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    path: '/analytics',
  },
]

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
          <CheckCircle2 size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            TaskFlow
          </h1>

          <p className="text-xs text-slate-400">
            Daily Task Manager
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            )
          })}
        </div>
      </nav>

      <div className="border-t border-slate-100 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar