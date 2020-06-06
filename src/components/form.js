import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HIDE_FORM } from '../actions';
import { Heading } from './styled/styledParts';

const FormContainer = props => {
  const [formState, setFormState] = useState({
    candidate_email: 'ahmed.mahfoudh1991@gmail.com',
    label: null,
  });

  const [formErrors, setFormErrors] = useState({
    message: null,
    isInvalid: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/task',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(formState),
    })
      .then(() => {
        props.toggleInvisible();
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          isInvalid: !err.response.data.sucess,
          message: err.response.data.message
        });
      });
  };

  const handleLabelChange = e => {
    setFormState({
      ...formState,
      label: e.target.value,
    });
  };

  const handleClick = e => {
    if (e.target.nodeName === 'DIV') props.toggleInvisible();
  };

  return (
    <div className="task-form" onMouseDown={handleClick}>
      <form name="task-form" onSubmit={handleSubmit}>
        <Heading
          type="secondary"
        >
          What do you want to do ?
        </Heading>
        <div className="input-field">
          <input type="text" name="task-name" onChange={handleLabelChange} />
          {formErrors.isInvalid
            ? <p>{formErrors.message}</p>
            : null}
        </div>
        <button className="button" type="submit">+ I&apos;ll do it</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  visible: state.formVisible,
});

const mapDispatchToProps = dispatch => ({
  toggleInvisible: () => {
    dispatch({
      type: HIDE_FORM,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
