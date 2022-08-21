import React from "react";
import pi from './ProfileInfo.module.css';


class ProfileStatus extends React.Component{

    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render(){
        return(
            <div className={pi.status_bar}>
                {!this.state.editMode ? <span className={pi.status} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                : <input type="text" className={pi.status_input} onBlur={this.deActivateEditMode.bind(this)} autoFocus={true} placeholder={this.props.status}/>}
            </div>
        )
    }
}

export default ProfileStatus;