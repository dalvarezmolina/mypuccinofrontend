import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../src/actions/login';

const FormInput = ({
    input: { onChange },
    placeholder,
    type,
    value,
  }) => (
    <input
      className="form-control" 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={ ({ target }) => onChange(target.value)}
      formNoValidate
    />
  );

class LoginCore extends React.Component {
    
    render() {
        const {
            doLogin,
            handleSubmit,
          } = this.props;
          return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Login" />
                    <section className="login-area ptb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="login-content">
                                        <div className="section-title">
                                            <h2><span className="dot"></span> Login</h2>
                                        </div>
        
                                        <form onSubmit={handleSubmit(doLogin.bind(this))} className="login-form">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <Field
                                                    component={FormInput}
                                                    type='email'
                                                    placeholder="Enter your name" 
                                                    id="name" 
                                                    name="name"
                                                />
                                            </div>
                                            
        
                                            <div className="form-group">
                                                <label>Password</label>
                                                <Field
                                                    component={FormInput}
                                                    type='password'
                                                    placeholder="Enter your password" 
                                                    id="password" 
                                                    name="password" 
                                                />
                                            </div>
        
                                            <button type="submit" className="btn btn-primary">Login</button>
                                            
                                            <Link href="#">
                                                <a className="forgot-password">Lost your password?</a>
                                            </Link>
                                        </form>
                                    </div>
                                </div>
        
                                <div className="col-lg-6 col-md-12">
                                    <div className="new-customer-content">
                                        <div className="section-title">
                                            <h2><span className="dot"></span> New Customer</h2>
                                        </div>
        
                                        <span>Create a Account</span>
                                        <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                        <Link href="/signup">
                                            <a className="btn btn-light">Create A Account</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

const Login = reduxForm({
    form: 'login',
  })(LoginCore);

export default connect(
    undefined,
    (dispatch) => ({
      doLogin(values) {
        console.log(values)
          dispatch(actions.userLogin({
            
            username: values.username,
            password: values.password,
          }))
        
      }
    })
  )(Login);
