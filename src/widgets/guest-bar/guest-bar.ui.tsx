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
      color="inherit"
      className="bg-pc-100 shadow-none border-b-1 border-sc-100"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="flex justify-between">
          <Box className="flex items-center">
            <NewspaperIcon className="mr-1 text-pc-500" />
            <Link
              to={pathKeys.home()}
              className="font-bold text-xl text-pc-500"
            >
              Makala Box
            </Link>
          </Box>
          <Box className="flex items-center gap-1">
            <Link to={pathKeys.feed()}>
              <IconButton
                className="hidden md:flex"
                aria-label="navigate to article page"
              >
                <SearchIcon />
              </IconButton>
            </Link>
            <Button
              variant="outlined"
              className="font-serif border-pc-400 text-pc-500 "
            >
              Авторизоваться
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
