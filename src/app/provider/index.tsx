import { CustomThemeProvider } from './CustomThemeProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { BrowserRouter } from './RouterProvider';
import { HelmetProvider } from 'react-helmet-async';

const Provider = () => {
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
