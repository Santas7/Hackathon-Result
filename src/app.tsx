import { Login } from './pages/login/login'
import { Registration } from './pages/registration/registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameArea } from './pages/game-area'
import { Dashboard } from './pages/dashboard/dashboard'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration-page" element={<Registration />} />
        <Route path="/game-area-page" element={<GameArea />} />
        <Route path="/dashboard-page" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
