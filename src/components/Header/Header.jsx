import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";

const Header = (props) => {
    return (
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>
                    {props.login} / <button onClick={props.logout}>Logout</button>
                </div> :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    );
};

class HeaderC extends React.Component {
    componentDidMount() {
        // this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderC);