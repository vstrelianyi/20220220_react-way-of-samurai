// REDUX
import { connect } from 'react-redux';

import {
  setUserProfile
} from '../../redux/profile-reducer';
import ProfileInfoClass from './ProfileInfoClass/ProfileInfoClass';

const mapStateToProps = ( state ) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect( mapStateToProps, { setUserProfile, } )( ProfileInfoClass );
