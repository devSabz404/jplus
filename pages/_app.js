import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Head from 'next/head';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import  store  from "../store/store";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  let persistor = persistStore(store);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
    
        <CssBaseline />
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        
        <Component {...pageProps} />
        </PersistGate>
  </Provider>
    
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};



