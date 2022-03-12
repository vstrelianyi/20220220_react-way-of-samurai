import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const Pagination = ( props ) => {
  const { pagesCount, currentPage, onPageChanged, } = props;

  const classes = classNames( [
    styles.Pagination,
    'pagination',
  ] );

  const getPaginationHTML = count => {
    let html = [];
    for ( let i = 1; i <= count; i++ ){

      html.push( <PaginationItem key={ i } i={ i } currentPage={ currentPage } onPageChanged={ onPageChanged }/> );
    }

    return html;
  };

  return (
    <ul className={ classes }>
      { getPaginationHTML( pagesCount ) }
    </ul>
  );
};

const PaginationItem = ( props ) => {
  const { i, currentPage, onPageChanged, } = props;
  const paginationItemClasses = classNames( [
    'badge',
    currentPage === i ? 'current' : null,
  ] );

  return (
    <li className={ paginationItemClasses }>
      <button onClick={ () => {
        onPageChanged( i );
      } }>{ i }</button>
    </li>
  );
};

export default Pagination;