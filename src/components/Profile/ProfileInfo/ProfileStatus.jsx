import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    toggleEditMode = (mode) => {
        if (!mode) {
            // this.setState({})
            this.props.updateStatus(this.state.status);
        }
        this.setState({editMode: mode});
    };

    statusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div onDoubleClick={() => this.toggleEditMode(true)}>
                        {this.props.status || 'There is no status right now...'}
                    </div> :
                    <div>
                        <input onChange={this.statusChange} autoFocus={true} onBlur={() => this.toggleEditMode(false)} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;