import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser, Login} from '../actions/auth'; 
import {Link} from 'react-router-dom';
import Input from './input';
import spinner from '../assets/spinning-single.svg';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

const passwordLength = length({min: 6, max: 72});
const usernameLength = length({min: 3, max: 12});
const matchesPassword = matches('password');

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
    let error;
    let loading; 
		
	if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
						{this.props.error}
				</div>
			);
    }

    if (this.props.submitting) {
			loading = (
				<div id="loading"><img src={spinner} alt="Loading..."/></div>
			);
    }

    return (
        <div className="reg-cont">
        <h1>SURFSPOT</h1>
        <h2>Register</h2>
        <form
        className="login-form" aria-label="Registration form" aria-live="assertive"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>
        <label htmlFor="username">Username</label>
        <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, usernameLength, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
        />
      
        <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Register
        </button>
    </form>
    {error}
    {loading}
    <h3>Already have an account? </h3>
    <button><Link to="/">Login</Link></button>
    </div>
    )
  }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);