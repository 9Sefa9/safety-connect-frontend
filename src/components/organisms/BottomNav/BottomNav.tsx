import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Route } from '../../../router'

import styles from './BottomNav.module.css'
import { ClockIcon, TimeIcon } from '@mui/x-date-pickers'

const BottomNav = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()

    return (
        <Box className={styles.Container}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                    switch (newValue) {
                        case 0:
                            navigate(Route.ROOT)
                            break
                        case 1:
                            navigate(Route.BLOG)
                            break
                        case 2:
                            navigate(Route.MARKETING)
                            break
                        case 3:
                            navigate(Route.SIGNUP)
                            break
                    }
                }}
            >
                <BottomNavigationAction label="ROOT" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="BLOG" icon={<PersonIcon />} />
                <BottomNavigationAction label="MARKETING" icon={<TimeIcon />} />
                <BottomNavigationAction label="SIGN IN" icon={<ClockIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default BottomNav
