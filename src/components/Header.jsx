import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://s1.mzstatic.com/us/r30/Purple4/v4/28/43/01/284301c1-c09b-0e4d-8f13-81b2554b8d8a/mzl.noihcpxs.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
