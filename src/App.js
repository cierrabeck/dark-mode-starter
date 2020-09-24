import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";
import Toggle from "./components/Toggle";

function App() {

  const [theme, toggleTheme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  
  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
