import { useEffect } from 'react';
import '../theme/index.css';
import { CustomThemeProvider } from './CustomThemeProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { BrowserRouter } from './RouterProvider';
import { HelmetProvider } from 'react-helmet-async';


const Provider = () => {
  useEffect(() => {
    const removeLoader = () => {
      const loader = document.getElementById('loader-content');
      if (loader) {
        loader.remove();
      }
    };

    removeLoader();
  }, []);
  return (
    <HelmetProvider>
      <QueryClientProvider>
        <CustomThemeProvider>
          <BrowserRouter />
        </CustomThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default Provider;
