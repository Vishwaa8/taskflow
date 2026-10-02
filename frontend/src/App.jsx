import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'

import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TasksPage from './pages/TasksPage'

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Authentication Routes */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      {/* Dashboard Routes */}
      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/tasks"
          element={<TasksPage />}
        />
      </Route>

      {/* Unknown Route */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  )
}

export default App