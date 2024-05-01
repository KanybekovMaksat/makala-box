import '../theme/index.css';
import { CustomThemeProvider } from './CustomThemeProvider';
import { QueryClientProvider } from './QueryClientProvider';
import { BrowserRouter } from './RouterProvider';

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
