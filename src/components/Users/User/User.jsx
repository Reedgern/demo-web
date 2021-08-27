import React from "react";
import userImageDefault from '../../../assets/images/userImageDefault.png';
import s from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    const follow = () => {
        props.follow(props.id);
    };

    const unfollow = () => {
        props.unfollow(props.id);
    };

    return (
        <div>
            <div>
                <NavLink to={`/profile/${props.id}`}><img className={s}
                                                          src={props.photos.small != null ? props.photos.small : userImageDefault}/></NavLink>
            </div>
            <div>{props.name} / {props.status != null ? props.status : 'Status is empty right now...'}</div>
            <div>
                {props.followed ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                                          onClick={unfollow}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={follow}>Follow</button>}
            </div>
        </div>
    )
};

export default User;