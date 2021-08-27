import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {login, logout} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Login'} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={'password'} name={'password'} placeholder={'Password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
            </div>
            {props.error ?
                <div className={s.summaryError}>
                    {props.error}
                </div> :
                null
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={`profile`}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId
});

const mapDispatchToProps = {
    login,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);