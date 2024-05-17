import { useEffect } from 'react';
import '../theme/index.css';
import { CustomThemeProvider } from './CustomThemeProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { BrowserRouter } from './RouterProvider';

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
    <QueryClientProvider>
      <CustomThemeProvider>
        <BrowserRouter />
      </CustomThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
