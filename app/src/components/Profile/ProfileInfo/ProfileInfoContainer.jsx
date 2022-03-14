import React from 'react';

// REDUX
import { connect } from 'react-redux';
import {
  setUserProfile
} from '../../../redux/profile-reducer';

// DAL
import axios from 'axios';

// COMPONENTS
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';
import ProfileInfo from './ProfileInfo';

class ProfileInfoClass extends React.Component {

  componentDidMount () {
    axios.get( 'https://social-network.samuraijs.com/api/1.0/profile/2' )
      .then( res => {
        const profile = res.data;
        this.props.setUserProfile( profile );
      } );
  }

  render () {

    if ( !this.props?.profile ){
      return <LoaderSpinner isLoading={ true }/>;
    }

    return <ProfileInfo profile={ this.props.profile }/>;

  }

}

const mapStateToProps = ( state ) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect( mapStateToProps, { setUserProfile, } )( ProfileInfoClass );
