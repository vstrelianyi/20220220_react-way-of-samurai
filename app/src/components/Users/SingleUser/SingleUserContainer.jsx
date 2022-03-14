import { useParams } from 'react-router-dom';

import React from 'react';

import axios from 'axios';
import LoaderSpinner from '../../Loaders/LoaderSpinner/LoaderSpinner';

import SingleUser from './SingleUser';

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
    if ( !this.state.profile ){
      return <LoaderSpinner isLoading={ true }/>;
    }

    return <SingleUser profile={ this.state.profile }/>;
  }

}

const SingleUserContainer = () => {
  const { userId, } = useParams();

  return (
    <SingleUserClass userId={ userId }/>
  );
};

export default SingleUserContainer;
