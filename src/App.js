import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './Themes/Theme';
import Header from './Components/Header/Header';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Header />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
