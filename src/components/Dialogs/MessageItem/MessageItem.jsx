import classes from './MessageItem.module.css';

const MessageItem = ({ message }) => {
  return <div className={classes.message}>{message}</div>;
};

export default MessageItem;
