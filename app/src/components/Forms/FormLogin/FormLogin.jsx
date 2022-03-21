// STYLES
import '../form.scss';
import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';

// COMPONENTS
import Button from 'components/Button/Button';
import { Field, Form } from 'react-final-form';
// https://www.npmjs.com/package/react-google-recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// https://social-network.samuraijs.com/docs?type=todolist#auth_login_post
const FormLogin = ( props ) => {
  const { loginUser, } = props;
  const classes = classNames( [
    styles.FormLogin,
    'form-login',
  ] );

  const handleOnSubmit = ( values ) => {
    console.log( values );
    // const data = {
    //   'email': 'chmpain@gmail.com',
    //   'password': '~EQ2Rp,,PsEJ)j,{',
    // };
    loginUser( values );
  };

  const handleOnValidate = ( e ) => {
    // console.log( e );
  };

  // validators
  const required = value => ( value ? undefined : 'Required' );

  const onCaptchaPassed = async () => {
    console.log( 'onCaptchaPassed' );
    // setIsCaptchaPassed( true );
  };

  return (
    <Form
      onSubmit={ handleOnSubmit }
      validate={ handleOnValidate }
      render={ ( { handleSubmit, } ) => (
        <form onSubmit={ handleSubmit } className={ classes }>
          <Field name="email" validate={ required }>
            { ( { input, meta, } ) => (
              <label className="form-control">
                <span>Email:</span>
                <input { ...input } type="text" placeholder="email" />
                { meta.error && meta.touched && <span className="error">{ meta.error }</span> }
              </label>
            ) }
          </Field>
          <Field name="password" validate={ required }>
            { ( { input, meta, } ) => (
              <label className="form-control">
                <span>Password:</span>
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
          <ReCAPTCHA
            sitekey="6Ld6OPAeAAAAAEHyoG4wzb63HV55s9hBaEwhbhwy"
            onChange={ onCaptchaPassed }
            theme="light"
            hl="uk"
            size="compact"
          />
          <Button type="submit">Login</Button>
        </form>
      ) }
    />
  );
};

export default FormLogin;