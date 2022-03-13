import SingleUserClass from './SingleUserClass';
import { useParams } from 'react-router-dom';

const SingleUserContainer = () => {

  const { userId, } = useParams();
  console.log( userId );

  return (
    <SingleUserClass userId={ userId }/>
  );
};

export default SingleUserContainer;
