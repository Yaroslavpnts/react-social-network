import classes from './Header.module.css';
import logo from '../../my-logo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
