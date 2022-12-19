import React from "react";
import {profileAPI} from "../../../api/api";

class ProfileAvatar extends React.Component {
  state = {
  file: null
  };

  addAvatar =(e) => {
    this.setState({
      file: e.target.files[0]
    })
  }
  putAvatar = () => {
    let formData = new FormData()
    formData.append('image', this.state.file)
  profileAPI.updateAvatar(formData).then(response => {
    console.log(this.state.file)
    console.log('AVATAR_API:', response)
  })
  }


  render() {
    return (
      <div>
        <input type="file" name='file' onChange={this.addAvatar} /> <br/>
        <button onClick={this.putAvatar}>Отправить</button>
        {/*<div>*/}
        {/*  <label htmlFor="filePicker" style={{ background:"grey", padding:"5px 10px" }}>*/}
        {/*    My custom choose file label*/}
        {/*  </label>*/}
        {/*  <input id="filePicker" style={{visibility:"hidden"}} type={"file"}></input>*/}
        {/*</div>*/}
      </div>
    );
  }
}
export default ProfileAvatar;
