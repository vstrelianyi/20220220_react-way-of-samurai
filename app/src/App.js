import classNames from 'classnames/bind';
import styles from './App.module.scss';

import './styles/_globals.scss';

import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { Helmet } from 'react-helmet';

const App = () => {

  const classes = classNames( [
    styles.App,
    'app',
  ] );

  return (
    <BrowserRouter>
      <div className={ classes }>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Samurai chat</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header/>
        <Nav/>
        <Main/>
      </div>
    </BrowserRouter>
  );
};

export default App;
