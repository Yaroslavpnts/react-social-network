import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map(message => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <textarea className={classes.createMessage}></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
