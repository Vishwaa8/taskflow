import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Route>
    </Routes>
  )
}

export default App