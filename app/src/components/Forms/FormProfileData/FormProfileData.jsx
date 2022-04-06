// STYLES
import '../form.scss';
import classNames from 'classnames/bind';
import styles from './FormProfileData.module.scss';

// COMPONENTS
import Button from 'components/Button/Button';
import { Field, Form } from 'react-final-form';
import FormControl from 'components/Forms/FormControl/FormControl';
// https://www.npmjs.com/package/react-google-recaptcha
// import ReCAPTCHA from 'react-google-recaptcha';

// utils
import sleep from 'utils/sleep';

// validators
import {
  composeValidators,
  required,
  maxLengthCreator,
  minLengthCreator
} from '../../../utils/validators/validators';

// https://social-network.samuraijs.com/docs?type=todolist#auth_login_post
const FormProfileData = ( props ) => {
  const { updateProfile, } = props;
  const classes = classNames( [
    styles.FormProfileData,
    'form-profile-data',
  ] );

  // validators
  const maxLength =  maxLengthCreator( 10 );
  const minLength =  minLengthCreator( 4 );

  //HANDLERS
  const handleOnSubmit = async ( values ) => {
    updateProfile( values );
    await sleep( 500 );
  };
  const handleOnValidate = ( e ) => {
    // console.log( e );
  };

  return (
    <Form
      onSubmit={ handleOnSubmit }
      validate={ handleOnValidate }
      render={ ( { handleSubmit, form, submitting, pristine, } ) => (
        <form
          onSubmit={ event => {
            handleSubmit( event );
            // .then( form.reset );
          } }
          className={ classes }
          // autoComplete="off"
          noValidate
        >
          <Field name="fullName" validate={ required }>
            { props => <FormControl label="Full name:" { ...props }><input placeholder="Full name"/></FormControl> }
          </Field>
          <Field name="lookingForAJob" type="checkbox">
            { props => <FormControl label="Looking for a job:" { ...props }><input type="checkbox"/></FormControl> }
          </Field>
          <Field name="lookingForAJobDescription" validate={ required }>
            { props => <FormControl label="Job description:" { ...props }><textarea placeholder="Job description..."/></FormControl> }
          </Field>
          <Field name="aboutMe" validate={ required }>
            { props => <FormControl label="About me:" { ...props }><textarea placeholder="About me..."/></FormControl> }
          </Field>

          <Button type="submit" disabled={ submitting || pristine } >Update Profile</Button>
        </form>
      ) }
    />
  );
};

export default FormProfileData;