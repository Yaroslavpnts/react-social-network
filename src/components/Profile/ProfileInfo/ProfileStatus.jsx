import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    //метод setState асинхронен
    this.setState(
      {
        editMode: true,
      },
      () => this.inputStatus.current.focus()
    );
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  inputStatus = React.createRef();

  render() {
    console.log(2);
    return (
      <div>
        {/* {!this.state.editMode && ( */}
        <div>
          <span
            className={this.state.editMode ? classes.editMode : ''}
            onDoubleClick={this.activateEditMode.bind(this)}
          >
            {this.props.status}
          </span>
        </div>
        {/* )} */}
        {/* {this.state.editMode && ( */}
        <div>
          <input
            // autoFocus
            className={this.state.editMode ? classes.editMode : ''}
            ref={this.inputStatus}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.props.status}
          />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default ProfileStatus;
