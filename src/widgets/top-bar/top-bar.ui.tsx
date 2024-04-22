import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Container,
  Typography,
  Tooltip,
  Avatar,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import { removeCookie } from 'typescript-cookie';
import { pathKeys } from '~shared/lib/react-router';
import { sessionQueries } from '~entities/session';

const pages = {
  feed: 'Лента',
  favorites: 'Избранные',
};

export function TopBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { data: userData } = sessionQueries.useloginUserQuery();

  const firstName = userData?.data?.firstName || '';
  const lastName = userData?.data?.lastName || '';
  const role = userData?.data?.role || '';
  const photo = userData?.data?.photo || '';
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

  const handleLogout = () => {
    removeCookie('access');
    removeCookie('refresh');
  };

  return (
    <AppBar
      position="fixed"
      className="shadow-none border-b-2 border-sc-100"
      color="inherit"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="flex justify-between">
          <Link
            to={pathKeys.home()}
            className="hidden md:flex font-bold text-xl hover:text-second-100 duration-300"
          >
            <NewspaperIcon className="mr-1" />
            Makala Box
          </Link>

          <div className="flex md:hidden">
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="block md:hidden"
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
          </div>

          <div className="flex md:hidden">
            <NewspaperIcon />
            <Link to={pathKeys.home()} className="font-bold text-xl">
              Makala Box
            </Link>
          </div>

          <div className="flex gap-2">
            <div className="hidden md:flex items-center ml-3">
              {role === 'writer' ? (
                <Tooltip title="Написать статью">
                  <Link to={pathKeys.editor.root()}>
                    <IconButton aria-label="navigate to sandbox">
                      <EditIcon className="hover:text-second-100" />
                    </IconButton>
                  </Link>
                </Tooltip>
              ) : null}
              <Link to={pathKeys.favorites()}>
                <IconButton aria-label="navigate to favorites article page">
                  <BookmarkAddedIcon className="hover:text-second-100" />
                </IconButton>
              </Link>
              <Link to={pathKeys.feed()}>
                <IconButton aria-label="navigate to article page">
                  <SearchIcon className="hover:text-second-100" />
                </IconButton>
              </Link>
            </div>

            <div>
              <Tooltip title="Открыть профиль">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={`${firstName} ${lastName}`} src={photo} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={pathKeys.profile.root()}>Профиль</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Выйти</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
