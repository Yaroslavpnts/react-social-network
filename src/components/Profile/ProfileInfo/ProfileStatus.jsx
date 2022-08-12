import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  inputStatusRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    //метод setState асинхронен
    this.setState(
      {
        editMode: true,
      },
      () => {
        this.inputStatusRef.current.focus();
        this.inputStatusRef.current.select();
      }
    );
  };

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange(e) {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // Внутри этого метода, все setState должны быть внутри какого-либо условия
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }

    console.log('updated');
  }

  render() {
    return (
      <div className={classes.profileStatus}>
        {/* {!this.state.editMode && ( */}
        <div>
          <span
            className={this.state.editMode ? classes.editMode : ''}
            onDoubleClick={this.activateEditMode}
          >
            {this.props.status || '------'}
          </span>
        </div>
        {/* )} */}
        {/* {this.state.editMode && ( */}
        <div>
          <input
            // autoFocus
            onChange={this.onStatusChange.bind(this)}
            className={this.state.editMode ? classes.editMode : ''}
            ref={this.inputStatusRef}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.state.status}
          />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default ProfileStatus;
