import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  let path = `/dialogs/${id}`;

  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Yaroslav" id="2" />
        <DialogItem name="Dasha" id="3" />
        <DialogItem name="Viktor" id="4" />
        <DialogItem name="Alexander" id="5" />
        <DialogItem name="Mariya" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
