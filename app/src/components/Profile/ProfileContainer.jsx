// REDUX
import { connect } from 'react-redux';

import {
  setUserProfile
} from '../../redux/profile-reducer';
import ProfileInfoC from './ProfileInfoC/ProfileInfoC';

const mapStateToProps = ( state ) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect( mapStateToProps, {
  setUserProfile,
} )( ProfileInfoC );
