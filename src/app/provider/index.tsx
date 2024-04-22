import '../theme/index.css';
import { BrowserRouter } from './RouterProvider';
import { StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default Provider;
