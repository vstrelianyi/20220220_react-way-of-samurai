import React from 'react';

import axios from 'axios';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';

import classNames from 'classnames';
import styles from './SingleUserClass.module.scss';
import DataField from '../../DataField/DataField';

// IMAGES
import image_default from '../../../images/users/default.png';

class SingleUserClass extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      profile: null,
    };
  }

  componentDidMount () {
    axios.get( `https://social-network.samuraijs.com/api/1.0/profile/${ this.props.userId }` )
      .then( res => {
        const profile = res.data;
        this.setState( { profile, } );
        // console.log( 'this.profile', this.profile );
        // this.props.setUserProfile( profile );
      } );
  }

  render () {
    const classes = classNames( [
      styles.SingleUserClass,
      'single-user',
    ] );

    if ( !this.state.profile ){
      return <LoaderSpinner isLoading={ true }/>;
    }

    const userImage = this.profile?.photos?.small ? this.profile?.photos?.small : image_default;

    return (
      <div className={ classes }>
        <picture>
          <source srcSet={ userImage } type="image/webp" />
          <img src={ userImage } alt="" />
        </picture>
        <DataField  label="name: " value={ this.state.profile?.fullName }/>
      </div>
    );
  }

}

export default SingleUserClass;