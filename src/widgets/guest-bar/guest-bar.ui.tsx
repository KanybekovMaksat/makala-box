import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import SearchIcon from '@mui/icons-material/Search';

export function GuestBar() {
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
          <Box
            sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}
          >
            <Link to={pathKeys.feed()}>
              <IconButton
                sx={{ display: 'flex' }}
                aria-label="navigate to article  page"
              >
                <SearchIcon />
              </IconButton>
            </Link>

            <Button sx={{ color: 'gray' }} color="inherit" variant="outlined">
              Авторизоваться
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
