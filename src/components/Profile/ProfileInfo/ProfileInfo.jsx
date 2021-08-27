import React from "react";
import userImageDefault from '../../../assets/images/userImageDefault.png';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div>
            <h1>{props.profile.fullName}</h1>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : userImageDefault}/>
            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
        </div>
    );
}

export default ProfileInfo;