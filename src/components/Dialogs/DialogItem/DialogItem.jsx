import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  let path = `/dialogs/${id}`;

  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
