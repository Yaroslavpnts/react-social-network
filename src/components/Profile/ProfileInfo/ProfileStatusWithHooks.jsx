import React, { useState } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

  const inputStatus = React.createRef();

  const activateEditMode = () => {
    inputStatus.current.focus();
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => {
    setStatus(e.target.value);
  };

  return (
    <div className={classes.profileStatus}>
      {/* {!this.state.editMode && ( */}
      <div>
        <span className={editMode ? classes.editMode : ''} onDoubleClick={activateEditMode}>
          {props.status || '------'}
        </span>
      </div>
      {/* )} */}
      {/* {this.state.editMode && ( */}
      <div>
        <input
          // autoFocus
          onChange={onStatusChange}
          ref={inputStatus}
          className={editMode ? classes.editMode : ''}
          onBlur={deActivateEditMode}
          value={status || ''}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default ProfileStatusWithHooks;
