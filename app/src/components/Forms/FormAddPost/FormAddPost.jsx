// STYLES
import '../form.scss';
import classNames from 'classnames/bind';
import styles from './FormAddPost.module.scss';

// COMPONENTS
import Button from 'components/Button/Button';
import { Form, Field  } from 'react-final-form';

const FormAddPost = ( props ) => {
  const { addPost, } = props;

  const classes = classNames( [
    styles.FormAddPost,
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
    const { newPostText, } = values;
    addPost( newPostText );
  };

  const handleOnValidate = ( e ) => {
  };

  return (
    <Form
      onSubmit={ handleOnSubmit }
      validate={ handleOnValidate }
      render={ ( { handleSubmit, } ) => (
        <form onSubmit={ handleSubmit } className={ classes }>
          <Field validate={ required } name="newPostText">
            { ( { input, meta, } ) => (
              <div className="form-control">
                <textarea { ...input } name="newPostText" placeholder="Your post text..." cols="30" rows="10"/>
                { meta.error && meta.touched && <span className="error">{ meta.error }</span> }
              </div>
            ) }
          </Field>
          <Button type="submit">Add Post</Button>
        </form>
      ) }
    />
  );
};

export default FormAddPost;