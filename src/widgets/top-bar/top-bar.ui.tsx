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
  Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import EditIcon from '@mui/icons-material/Edit';
import { removeCookie } from 'typescript-cookie';
import { pathKeys } from '~shared/lib/react-router';
import { userQueries } from '~entities/user';
import WidgetsIcon from '@mui/icons-material/Widgets';

export function TopBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { data: userData } = userQueries.useLoginUserQuery();
  const {
    data: { firstName = '', lastName = '', role = '', photo = '' } = {},
  } = userData || {};

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate(`${pathKeys.profile.root()}`);
  };

  const handleLogout = () => {
    removeCookie('access');
    localStorage.removeItem('refresh');
    navigate(`${pathKeys.home()}`);
    userQueries.userService.removeCache();
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
            <WidgetsIcon className="mr-1" />
            Makala Box
          </Link>

          {/* <div className="flex md:hidden">
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
          </div> */}

          <div className="flex md:hidden">
            <WidgetsIcon />
            <Link to={pathKeys.home()} className="font-bold text-xl">
              Makala Box
            </Link>
          </div>

          <div className="flex gap-4">
            <div className="hidden md:flex items-center ml-3">
              <Link to={pathKeys.favorites()}>
              <Tooltip title="Сохранённые статьи">
                <IconButton aria-label="navigate to favorites article page">
                  <BookmarkAddedIcon className="hover:text-second-100" />
                </IconButton>
              </Tooltip>
              </Link>
              {role === 'writer' ? (
                <Button
                  onClick={() => navigate(pathKeys.editor.root())}
                  size="small"
                  className="border-pc-400 duration-300 text-pc-400 hover:border-[white]  hover:bg-second-100 hover:text-[white]"
                  variant="outlined"
                  endIcon={<EditIcon />}
                >
                  Написать
                </Button>
              ) : null}
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
                  <Link to="/profile">Профиль</Link>
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
