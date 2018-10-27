import React, { Component } from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Login as loginaction} from '../actions/auth'; 
import {Link} from 'react-router-dom';
import Input from './input';
import spinner from '../assets/spinning-single.svg';
import {required, nonEmpty} from '../validators';

export class Login extends Component {
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
        .dispatch(loginaction(user));
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
      <div className="login-cont">
      
        <h1>SURFSPOT</h1>
        <h2>A CLEAN, EASY TO USE SURF REPORT APP</h2>


        <form className="login"  
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>
        <label htmlFor="username">Username</label>
        <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, nonEmpty]}
        />    
               <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Login
        </button>     
        </form>
        {error}
        {loading}
        <p>Demo Account <br /> User: tester <br />Pass: tester </p>
        <h3> Don't have an account? </h3>
        <button><Link to="/register">Register</Link></button>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('login', Object.keys(errors)[0]))
})(Login);