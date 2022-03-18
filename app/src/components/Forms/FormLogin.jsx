import './input.scss';

// STYLES
import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';

// COMPONENTS
import Button from '../Button/Button';
import { Field, Form } from 'react-final-form';

const FormLogin = () => {
  const classes = classNames( [
    styles.FormLogin,
    'form-login',
  ] );

  const handleOnSubmit = ( values ) => {
    console.log( values );
  };

  const handleOnValidate = ( e ) => {
    console.log( e );
  };

  // validators
  const required = value => ( value ? undefined : 'Required' );

  return (
    <Form
      onSubmit={ handleOnSubmit }
      validate={ handleOnValidate }
      render={ ( { handleSubmit, } ) => (
        <form onSubmit={ handleSubmit } className={ classes }>
          <Field name="login" validate={ required }>
            { ( { input, meta, } ) => (
              <label className="form-control">
                <span>Login</span>
                <input { ...input } type="text" placeholder="login" />
                { meta.error && meta.touched && <span className="error">{ meta.error }</span> }
              </label>
            ) }
          </Field>
          <Field name="password" validate={ required }>
            { ( { input, meta, } ) => (
              <label className="form-control">
                <span>Password</span>
                <input { ...input } type="password" placeholder="password" />
                { meta.error && meta.touched && <span className="error">{ meta.error }</span> }
              </label>
            ) }
          </Field>
          <Field name="remember-me">
            { ( { input, meta, } ) => (
              <label className="form-control">
                <span>remember me</span>
                <input { ...input } type="checkbox"/>
                { meta.error && meta.touched && <span className="error">{ meta.error }</span> }
              </label>
            ) }
          </Field>
          <Button type="submit">Login</Button>
        </form>
      ) }
    />
  );
};

export default FormLogin;