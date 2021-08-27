import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import User from "./User/User";
import s from './Users.module.css';
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return (
        <div>
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
            {props.users.map(u => <User key={u.id} photos={u.photos} name={u.name} status={u.status}
                                        followed={u.followed} followingInProgress={props.followingInProgress}
                                        id={u.id} follow={props.follow} unfollow={props.unfollow}/>)}
        </div>
    );
}

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        // console.log('render USERS');
        return (
            <div>
                {
                    this.props.isFetching ?
                        <Preloader/> : null}
                <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                       follow={this.props.follow} unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('mstp USERS');
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const mapDispatchToProps = {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);