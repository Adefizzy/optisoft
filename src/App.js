import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from './globalAsset/themes';
import { Row } from 'antd';
import './App.css';
import { TopBar } from './Components/TopBar/index';
import { Banner } from './Components/Banner/index';
import { Switch, Route } from 'react-router-dom';
import { PopularCat } from './Components/PopularCat/index';

function App() {
  const [isLight, setThemeState] = useState(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Switch>
        <Route path='/'>
          <Row>
            <TopBar />
            <Banner />
            <PopularCat />
          </Row>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
