import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { PageDefault } from './components/PageDefault';

import { AppContext, ThemeModeContext } from './contexts';
import { AppClient } from './clients';
import { routes } from './config';
import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import '../src/styles/app.css'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import {Reducer} from './Redux/Reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);
  const appClient = new AppClient();

  const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    Reducer: Reducer,
  });


  const persistedReducer = persistReducer(persistConfig, rootReducer)

  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  // const store = createStore(rootReducer);



  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme:any = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route: AppRoute) => (
    <Route key={route.key} path={route.path} component={route.component || PageDefault} exact />
  );

  return (
    <AppContext.Provider value={appClient}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <Router>
            <Switch>
              <Layout>
                {routes.map((route: AppRoute) =>
                  route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
                )}
              </Layout>
            </Switch>
          </Router>
          </PersistGate>
          </Provider>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
