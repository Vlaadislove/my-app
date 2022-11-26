import React from "react";

const state = {};

class ProfileStatus extends React.Component {
  state = {
    editMode: true
  };

  //  StatusClick() {
  //   ...state,
  //   editMode: true
  //  }

  render() {
    return (
      <div>
        {!this.editMode && (
          <div>
            <span>{this.props.status}</span>
          </div>
        )}
        {this.editMode && (
          <div>
            <input value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
