import styles from './Main.module.scss';
import classNames from 'classnames/bind';

import {
  Routes,
  Route
} from 'react-router-dom';

// COMPONENTS
import Profile from '../Profile/Profile';
import Chat from '../Chat/Chat';

const Main = () => {

  const classes = classNames( [
    styles.Main,
    'main',
  ] );

  return (
    <main className={ classes }>
      <Routes>
        <Route path="/" element={ <h1>Home</h1> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/chat" element={ <Chat/> } />
        <Route path="/news" element={ <h1>news</h1> } />
        <Route path="/music" element={ <h1>music</h1> } />
        <Route path="/settings" element={ <h1>settings</h1> } />
      </Routes>
    </main>
  );
};

export default Main;