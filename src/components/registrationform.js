import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser, Login} from '../actions/auth'; 
import Input from './input';

export  class RegistrationForm extends Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => {
                console.log('loggingin!')
                this.props.dispatch(Login(user))
            });
    }

  render() {
    return (
        <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>
        <label htmlFor="username">Username</label>
        <Field
            component={Input}
            type="text"
            name="username"
            // validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
            component={Input}
            type="password"
            name="password"
            // validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            // validate={[required, nonEmpty, matchesPassword]}
        />
        <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Register
        </button>
    </form>
    )
  }
}

export default reduxForm({
    form: 'registration',
    // onSubmitFail: (errors) => console.log(errors)
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);