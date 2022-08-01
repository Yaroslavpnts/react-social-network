import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const setStyle = ({ isActive }) => (isActive ? classes.active : '');

const DialogItem = ({ name, id }) => {
  let path = `/dialogs/${id}`;

  return (
    <div className={`${classes.dialog} `}>
      <NavLink className={setStyle} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
