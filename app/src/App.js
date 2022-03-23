// STYLES
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import './styles/_globals.scss';

// ROUTER
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// COMPONENTS
import HeaderContainer from 'components/Header/HeaderContainer';
import Nav from 'components/Nav/Nav';
import ProfileContainer from 'components/Profile/ProfileContainer';
import ChatContainer from 'components/Chat/ChatContainer';
import LoginContainer from 'components/Login/LoginContainer';
import Users from 'components/Users/Users';
import UserContainer from 'components/Users/User/UserContainer';
import NoMatch from 'components/NoMatch/NoMatch';
import Toaster from 'components/Toaster/Toaster';

const App = ( props ) => {
  const { children, } = props;

  const classes = classNames( [
    styles.App,
    'app',
  ] );
  // const dispatch = store.dispatch.bind( store );

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className={ classes }>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Samurai chat</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <HeaderContainer/>
          <Nav/>
          <main className="main">
            <Routes>
              <Route path="/" element={ <h1>Home</h1> } />
              <Route path="/profile" element={ <ProfileContainer/> } />
              <Route path="/chat" element={ <ChatContainer/> } />
              <Route path="/news" element={ <h1>news</h1> } />
              <Route path="/music" element={ <h1>music</h1> } />
              { /* <Route path="/users" element={ <Users/> } >
                <Route path=":userId" element={ <SingleUser/> } />
              </Route> */ }
              <Route path="/users" element={ <Users/> } />
              <Route path="/users/:userId" element={ <UserContainer/> } />
              <Route path="/settings" element={ <h1>settings</h1> } />
              <Route path="/login" element={ <LoginContainer/> } />
              <Route path="*" element={ <NoMatch/> } />
            </Routes>

            <Toaster/>
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
