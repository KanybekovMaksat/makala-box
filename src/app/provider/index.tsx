import '../theme/index.css';
import { BrowserRouter } from './RouterProvider';
import { StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter />
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default Provider;
