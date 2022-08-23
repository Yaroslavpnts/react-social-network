import React, { useEffect, useState } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  // let [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(111111, count);
  //   return () => console.log(222222, count);
  // }, [count]);

  let [status, setStatus] = useState(props.status);

  /*
    В useEffect передаем функции, который реакт должен выполнить после отрисовки компоненты
    вторым аргументом передаем зависимость (синхронизацию), то, от чего зависит компонента, и если 
    эти данные изменились, то нужно вызвать функцию, переданную в useEffect

    - Если вообще не передать вторым параметром ничего, то функция, переданная в useState будет вызываться при любом изменении
    пропсов или стейта, если функция вызывает функцию, то та функция так же будет постоянно вызываться.

    - Если передать пустой массив, то функция вызовится 1 раз (componentDidUpdate), и если функия возвращает функцию, то
    та функция вызовится 1 раз, перед тем, как компонента будет "умирать" (componentWillUnmount)
  */
  useEffect(() => {
    setStatus(props.status);

    if (editMode) inputStatus.current.focus();
  }, [props.status, editMode]);

  const inputStatus = React.createRef();

  const activateEditMode = () => {
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
        <span className={classes.description}>Status:</span>
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
        {/* <button onClick={() => setCount(count + 1)}>123123213</button> */}
      </div>
      {/* )} */}
    </div>
  );
};

export default ProfileStatusWithHooks;
