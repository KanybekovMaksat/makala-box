import '~shared/index.css';
import { BrowserRouter } from './RouterProvider';
import { StyledEngineProvider } from '@mui/material';

const Provider = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter />
    </StyledEngineProvider>
  );
};

export default Provider;
