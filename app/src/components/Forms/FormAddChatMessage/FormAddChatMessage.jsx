// STYLES
import '../form.scss';
import classNames from 'classnames/bind';
import styles from './FormAddChatMessage.module.scss';

// COMPONENTS
import Button from 'components/Button/Button';
import { Form, Field  } from 'react-final-form';

const FormAddChatMessage = ( props ) => {
  const { addMessage, } = props;

  const classes = classNames( [
    styles.FormAddChatMessage,
    'form-add-message',
  ] );

  // validators
  const required = value => ( value ? undefined : 'Required' );

  // HANDLERS
  const handleKeyPress = ( e ) => {
    if ( e.key === 'Enter' ){
      console.log( 'Enter' );
      // addPost( newPostText ) ;
    }
  };
  const handleOnSubmit = ( values ) => {
    const { newMessageText, } = values;
    addMessage( newMessageText );
  };

  const handleOnValidate = ( e ) => {
  };

  return (
    <Form
      onSubmit={ handleOnSubmit }
      validate={ handleOnValidate }
      render={ ( { handleSubmit, } ) => (
        <form onSubmit={ handleSubmit } className={ classes }>
          <Field validate={ required } name="newMessageText">
            { ( { input, meta, } ) => (
              <div className="form-control">
                <input { ...input } name="newPostText" placeholder="message text..."/>
                { meta.error && meta.touched && <span className="error">{ meta.error }</span> }
              </div>
            ) }
          </Field>
          <Button type="submit">Send Message</Button>
        </form>
      ) }
    />
  );
};

export default FormAddChatMessage;