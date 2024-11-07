import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Navbar from './components/organisms/Navbar/Navbar'
import BottomNav from './components/organisms/BottomNav/BottomNav'
import { Route } from './router'

import './App.css'
import { ThemeColors } from './themes/mui'

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate(Route.ROOT, { replace: true })
        }
    }, [])

    return (
        <div className="App">
            <CssBaseline />
            <Navbar />
            <div className="AppContainer">
                <Outlet />
                {/* <BottomNav /> */}
            </div>
        </div>
    )
}

export default App
