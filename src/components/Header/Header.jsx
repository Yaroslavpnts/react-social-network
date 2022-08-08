import classes from './Header.module.css';
import logo from '../../my-logo.svg';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';

const Header = props => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div className={classes.shortInfo}>
            <div className={classes.imgWrapper}>
              <img
                src={
                  props.currentUser && props.currentUser.photos.small
                    ? props.currentUser.photos.small
                    : userPhoto
                }
                alt="user"
              />
            </div>
            <span>{props.login}</span>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
