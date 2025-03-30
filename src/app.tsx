import { LoginPage } from './pages/login-page/login-page'
import { GameSetup } from './pages/game-setup'
import { RegistrationPage } from './pages/registration-page/registration-page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameArea } from './pages/game-area'
import { DashboardPage } from './pages/dashboard-page/dashboard-page'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/game-area-page" element={<GameArea />} />
        <Route path="/game-setup-page" element={<GameSetup />} />
        <Route path="/dashboard-page" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}
