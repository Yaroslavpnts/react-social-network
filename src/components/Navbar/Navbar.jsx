import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

/*
  let classes = {
    'nav': 'Navbar_nav__SavQF,
    'item': 'Navbar_item__GacED',
    'active': 'Navbar_active__PgXeu'
  }
*/

const setStyle = ({ isActive }) => (isActive ? classes.active : '');

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" className={setStyle}>
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/dialogs" className={setStyle}>
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="#">News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="#">Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="#">Settings</NavLink>
        </li>
      </ul>

      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
