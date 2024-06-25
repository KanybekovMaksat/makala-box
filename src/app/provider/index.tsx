import { useEffect } from 'react';
import '../theme/index.css';
import { CustomThemeProvider } from './CustomThemeProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { BrowserRouter } from './RouterProvider';
import { HelmetProvider } from 'react-helmet-async';

const Provider = () => {
  return (
    <QueryClientProvider>
      <CustomThemeProvider>
        <BrowserRouter />
      </CustomThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
