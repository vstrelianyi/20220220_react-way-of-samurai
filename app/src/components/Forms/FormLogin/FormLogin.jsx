// STYLES
import '../form.scss';
import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';

// COMPONENTS
import Button from 'components/Button/Button';
import { Field, Form } from 'react-final-form';
// https://www.npmjs.com/package/react-google-recaptcha
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../Input/Input';
import FormControl from 'components/Forms/FormControl/FormControl';

// validators
import {
  composeValidators,
  required,
  maxLengthCreator
} from '../../../utils/validators/validators';

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

  const onCaptchaPassed = async () => {
    console.log( 'onCaptchaPassed' );
    // setIsCaptchaPassed( true );
  };

  return (
    <Form
      onSubmit={ handleOnSubmit }
      validate={ handleOnValidate }
      render={ ( { handleSubmit, } ) => (
        <form onSubmit={ handleSubmit } className={ classes } autoComplete="off" noValidate>
          <Field name="email" validate={ required }>
            { props => <FormControl label="Email:" { ...props }><input placeholder="email"/></FormControl> }
          </Field>
          <Field name="password" validate={ required }>
            { props => <FormControl label="Password:" { ...props }><input placeholder="password" type="password"/></FormControl> }
          </Field>
          <Field name="remember-me" type="checkbox">
            { props => <FormControl label="remember me:" { ...props }><input  type="checkbox"/></FormControl> }
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