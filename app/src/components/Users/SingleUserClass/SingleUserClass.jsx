import React from 'react';

import axios from 'axios';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';

import classNames from 'classnames';
import styles from './SingleUserClass.module.scss';

class SingleUserClass extends React.Component {
  componentDidMount () {
    axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${ this.props.userId }` )
      .then( res => {
        const profile = res.data;
        console.log( profile );
        // this.props.setUserProfile( profile );
      } );
  }

  render () {
    const classes = classNames( [
      styles.SingleUserClass,
      'single-user',
    ] );

    if ( !this.props.userId ){
      return <LoaderSpinner isLoading={ true }/>;
    }

    return (
      <div className={ classes }>{ this.props.userId }</div>
    );
  }

}

export default SingleUserClass;