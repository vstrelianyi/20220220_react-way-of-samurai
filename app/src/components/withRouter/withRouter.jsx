/* eslint-disable react/display-name */

import { useParams } from 'react-router-dom';

const withRouter = ( Component ) => {
  const params = useParams();

  console.log( params );

  return <p>withRouter</p>;
};

export default withRouter;