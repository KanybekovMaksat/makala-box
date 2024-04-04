import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Container,
  Typography,
  Tooltip,
  Avatar,
} from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SearchIcon from '@mui/icons-material/Search';

const pages = {
  feed: 'Лента',
  favorites: 'Избранные',
};

const settings = ['Профиль', 'Выйти'];

export function TopBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleNavigateToPage = (pageName: string) => {
    const path = `/${pageName.toLowerCase()}`;
    navigate(path);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 'none', borderBottom: '1px solid  #EFEFEF' }}
      color="inherit"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="flex justify-between">
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NewspaperIcon sx={{ mr: 1 }} />
            <Link to={pathKeys.home()} className="font-bold text-xl">
              Makala Box
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.keys(pages).map((pageKey) => (
                <MenuItem
                  key={pageKey}
                  onClick={() => {
                    handleNavigateToPage(pageKey);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{pages[pageKey]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <NewspaperIcon />
            <Link to={pathKeys.home()} className=" font-bold text-xl">
              Makala Box
            </Link>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                ml: 3,
              }}
            >
              <Link to={pathKeys.favorites()}>
                <IconButton aria-label="navigate to favorites article page">
                  <BookmarkAddedIcon />
                </IconButton>
              </Link>
              <Link to={pathKeys.feed()}>
                <IconButton aria-label="navigate to article  page">
                  <SearchIcon />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
