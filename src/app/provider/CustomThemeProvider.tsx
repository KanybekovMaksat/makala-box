import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type CustomThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: 'Golos Text',
  },
});

export function CustomThemeProvider(props: CustomThemeProviderProps) {
  const { children } = props;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
  );
}
