// REACT
import React from 'react';
import { useParams } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import {
  getUserThunkCreator
} from '../../../redux/users-reducer';

// COMPONENTS
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';
import SingleUser from './SingleUser';

class SingleUserClass extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
    };
  }

  componentDidMount () {
    this.props.getUser( this.props.userId );
  }

  render () {
    if ( this.props.profile === null ){
      return <LoaderSpinner isLoading={ true }/>;
    }
    if ( this.props.profile === undefined ){
      return <p>No user found</p>;
    }

    return <SingleUser profile={ this.props.profile }/>;
  }
}

const SingleUserContainer = ( props ) => {
  const { userId, } = useParams();

  return (
    <SingleUserClass { ...props } userId={ userId }/>
  );
};

const mapStateToProps = ( state ) => {
  return {
    profile: state.usersPage.userProfile,
  };
};

export default connect( mapStateToProps, { getUser: getUserThunkCreator, } )( SingleUserContainer );
