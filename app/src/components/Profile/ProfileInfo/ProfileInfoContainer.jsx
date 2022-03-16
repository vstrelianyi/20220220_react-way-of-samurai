import React from 'react';

// REDUX
import { connect } from 'react-redux';
import {
  getUserProfileThunkCreator
} from '../../../redux/profile-reducer';

// COMPONENTS
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';
import ProfileInfo from './ProfileInfo';

class ProfileInfoClass extends React.Component {

  componentDidMount () {
    this.props.getUserProfile( 6629 );
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

export default connect( mapStateToProps, { getUserProfile: getUserProfileThunkCreator, } )( ProfileInfoClass );
