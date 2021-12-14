import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { APP_ROUTE } from '../../const';
import NotFound from '../not-found/not-found';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={APP_ROUTE.quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={APP_ROUTE.contacts}>
          <Contacts />
        </Route>
        <Route exact path={APP_ROUTE.home}>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
