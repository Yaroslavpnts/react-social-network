import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './FriendItem/FriendItem';

/*
  let classes = {
    'nav': 'Navbar_nav__SavQF,
    'item': 'Navbar_item__GacED',
    'active': 'Navbar_active__PgXeu'
  }
*/

const setStyle = ({ isActive }) => (isActive ? classes.active : '');

const Navbar = props => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.menu}>
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
          <NavLink to="/ab" className={setStyle}>
            News
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/cd" className={setStyle}>
            Music
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/de" className={setStyle}>
            Settings
          </NavLink>
        </li>
      </ul>

      <div className={classes.friendsContainer}>
        <span>Friends</span>
        <ul className={classes.friendsList}>
          {props.friends.map(friend => (
            <Friend key={friend.id} name={friend.name} photo={friend.photo} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
