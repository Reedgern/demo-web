import React, {Component} from "react";
import './App.css';
import {Route} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/Dialogs";
// import Profile from "./components/Profile/Profile";

import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

const Profile = React.lazy(() => import('./components/Profile/Profile'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div>
                <Header/>
                <Navbar/>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/profile/:userId?'} render={() => <React.Suspense fallback={<Preloader/>}><Profile/></React.Suspense>}/>
                {/*<Route path={'/dialogs'} render={() => <DialogsContainer/>}/>*/}
                <Route path={'/users'} render={() => <Users/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const mapDispatchToProps = {
    initializeApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);