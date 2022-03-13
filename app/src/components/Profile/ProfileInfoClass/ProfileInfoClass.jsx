import classNames from 'classnames/bind';
import DataField from '../../DataField/DataField';
import styles from './ProfileInfoClass.module.scss';

import React from 'react';

import axios from 'axios';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';

class ProfileInfoClass extends React.Component {

  componentDidMount () {
    axios.get( 'https://social-network.samuraijs.com/api/1.0/profile/2' )
      .then( res => {
        const profile = res.data;
        this.props.setUserProfile( profile );
      } );
  }

  render () {
    const classes = classNames( [
      styles.ProfileInfoClass,
      'profile-info',
    ] );

    if ( !this.props?.profile ){
      return <LoaderSpinner isLoading={ true }/>;
    }

    return (
      <div className={ classes }>
        <picture>
          <source srcSet={ this.props?.profile?.photos?.small } type="image/webp" />
          <img src={ this.props?.profile?.photos?.small } alt="" />
        </picture>
        <DataField label="name: " value={ this.props?.profile?.fullName }/>
      </div>
    );

  }

}

export default ProfileInfoClass;