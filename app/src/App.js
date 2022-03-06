import classNames from 'classnames/bind';
import styles from './App.module.scss';

import './styles/_globals.scss';

import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Chat from './components/Chat/Chat';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  Routes,
  Route
} from 'react-router-dom';

const App = ( props ) => {
  const { store, } = props;

  const classes = classNames( [
    styles.App,
    'app',
  ] );
  // addPost( { id: 10, message: 'sdt2223', likesCount: 0, } );

  const posts = store.getState().profilePage.posts;
  const dialogs = store.getState().chatPage.dialogs;
  const messages = store.getState().chatPage.messages;
  const newPostText = store.getState().profilePage.newPostText;
  const dispatch = store.dispatch.bind( store );

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className={ classes }>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Samurai chat</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Header/>
          <Nav/>
          <main className="main">
            <Routes>
              <Route path="/" element={ <h1>Home</h1> } />
              <Route path="/profile" element={ (
                <Profile posts={ posts } newPostText={ newPostText } dispatch={ dispatch }/>
              ) } />
              <Route path="/chat" element={ <Chat dialogs={ dialogs } messages={ messages }/> } />
              <Route path="/news" element={ <h1>news</h1> } />
              <Route path="/music" element={ <h1>music</h1> } />
              <Route path="/settings" element={ <h1>settings</h1> } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
