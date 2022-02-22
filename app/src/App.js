import classNames from 'classnames/bind';

import './_globals.scss';

// COMPONENTS
import styles from './App.module.scss';
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
