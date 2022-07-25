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
  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Yaroslav' },
    { id: 3, name: 'Dasha' },
    { id: 4, name: 'Viktor' },
    { id: 5, name: 'Alexander' },
    { id: 6, name: 'Mariya' },
  ];

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Dasha" id="3" />
        <DialogItem name="Viktor" id="4" />
        <DialogItem name="Alexander" id="5" />
        <DialogItem name="Mariya" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
