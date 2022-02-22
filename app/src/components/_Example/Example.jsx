import classNames from 'classnames/bind';
import styles from './Example.module.scss';

const Example = () => {
  const classes = classNames( [
    styles.Example,
    'example',
  ] );

  return (
    <div className={ classes }>Example</div>
  );
};

export default Example;