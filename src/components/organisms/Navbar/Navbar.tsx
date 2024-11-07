import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Route } from '../../../router';
import userAvatarImage from '../../../assets/images/user.png';

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleSignOut = () => {
        setAnchorElUser(null);
        // handle sign out logic here
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };

    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box onClick={() => navigate(Route.ROOT)} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <HealthAndSafetyIcon sx={{ mr: 1 }} />
                        <Typography variant="h6" noWrap>
                            Safety-Connect
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            variant="body1"
                            sx={{ cursor: 'pointer', padding: 2 }}
                            onClick={() => navigate(Route.ROOT)}
                        >
                            Home
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ cursor: 'pointer', padding: 2 }}
                            onClick={handleOpenMenu}
                        >
                            Menu
                        </Typography>
                        <Menu
                            anchorEl={anchorElMenu}
                            open={Boolean(anchorElMenu)}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem onClick={handleCloseMenu}>Option 1</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Option 2</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Option 3</MenuItem>
                        </Menu>
                    </Box>

                    {/* <IconButton onClick={handleOpenUserMenu}>
                        <UserAvatar
                            avatarImageAlt="user-avatar"
                            avatarImage={userAvatarImage}
                            handleOpenUserMenu={handleOpenUserMenu}
                            handleCloseUserMenu={handleCloseUserMenu}
                            handleSignOut={handleSignOut}
                            anchorElUser={anchorElUser}
                        />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                    </Menu> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
