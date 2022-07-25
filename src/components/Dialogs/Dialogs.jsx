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

  let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = messagesData.map(message => (
    <Message id={message.id} message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
