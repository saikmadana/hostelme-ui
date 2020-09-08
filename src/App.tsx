import React from 'react';
import './App.css';
import AppRouting from './app-routing';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <AppRouting/>
      </>
    </ThemeProvider>
  );
}

export default App;
