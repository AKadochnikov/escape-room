import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import { connect } from 'react-redux';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { APP_ROUTE } from '../../const';
import NotFound from '../not-found/not-found';
import { getIsDataLoaded } from '../../store/data/selectors';
import Loading from '../loading/loading';

const mapStateToProps = (state) => ({
  isDataLoaded: getIsDataLoaded(state),
});

const connector = connect(mapStateToProps);

const App = (props) => {
  const {isDataLoaded} = props;

  if(!isDataLoaded) {
    return (
      <Loading/>
    )
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={APP_ROUTE.detailedQuest}>
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
}

export default connector(App);
