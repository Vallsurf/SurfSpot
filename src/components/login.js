import React, { Component } from 'react'
import {Field, reduxForm, focus} from 'redux-form';
import {Login as loginaction} from '../actions/auth'; 
import Input from './input';
import './login.css'

export class Login extends Component {
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
        .dispatch(loginaction(user));
}
  render() {
    return (
      <div>
        <form className="login"  
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>
        <h1>Welcome to SurfSpot</h1>
        <h2>Coming Soon</h2>
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
               <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Login
        </button>     
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  // onSubmitFail: (errors) => console.log(errors)
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('login', Object.keys(errors)[0]))
})(Login);