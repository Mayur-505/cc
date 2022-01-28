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
import ProtectedRoute from './utils/ProtectedRoutes'
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);
  const appClient = new AppClient();

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme: any = useMemo(() => getAppTheme(mode), [mode]);

  const addRoute = (route: AppRoute) => {
    if(route.isEnabled){
      return (<Route key={route.key} path={route.path} component={route.component || PageDefault} exact />)
    }
    else {
      return (<ProtectedRoute exact path={route.path} auth={true} component={route.component || PageDefault} />)
    }
  };

  return (
    <AppContext.Provider value={appClient}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
