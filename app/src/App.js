import classNames from 'classnames/bind';
import styles from './App.module.scss';

import './styles/_globals.scss';

// COMPONENTS
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

const App = () => {

  const classes = classNames( [
    styles.App,
    'app',
  ] );

  return (
    <div className={ classes }>
      <Header/>
      <Nav/>
      <Main/>
    </div>
  );
};

export default App;
