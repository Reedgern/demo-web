import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const toggleEditMode = (newMode) => {
        if (!newMode) {
            props.updateStatus(status);
        }
        setEditMode(newMode);
    };

    const statusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode ?
                <div onDoubleClick={() => toggleEditMode(true)}>
                    {props.status || 'There is no status right now...'}
                </div> :
                <div>
                    <input onChange={statusChange} autoFocus={true} onBlur={() => toggleEditMode(false)} value={status}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;