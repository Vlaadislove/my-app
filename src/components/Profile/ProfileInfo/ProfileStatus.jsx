import React from "react";
import login from "../../Login/Login";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activatedEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatusThunk(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
 if(prevProps.status !== this.props.status){
   this.setState({
     status: this.props.status
   })
 }
    console.log('обновление')
  }

  render() {
    console.log('Рендер')
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activatedEditMode}>
              {this.props.status || "No status"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivatedEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
